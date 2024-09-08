"use strict";
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _mongoose = _interopRequireDefault(require("mongoose"));

//var _data = _interopRequireDefault(require("./models/data.js"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

//import data from './models/data.js';

const multipart = require('connect-multiparty');

var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

//var mongoURL =  process.env["MONGO_URL"]; // || "mongodb://localhost:27017/"

var mongoURL = "mongodb://localhost:27017/" //Local MongoDB
var dockerURL = "" //Local MongoDB    

//var mongoURL = "mongodb://mongo:27017/" //Local MongoDB Docker (mongo)


//console.log(mongoURL);

const PORT = process.env.PORT || 3001;
console.log("Port: ");
console.log(PORT)
const BASE_ROUTE = "openlair"; //var url = "mongodb://localhost:27017/";

const app = (0, _express.default)();

const router = _express.default.Router();

app.use((0, _cors.default)());
app.use(_bodyParser.default.json({limit: '10mb', extended: true}));// app.use((req, res, next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(  
//     "Access-Control-Allow-Headers",  
//     "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader("Access-Control-Allow-Methods",  
//     "GET, POST, PATCH, DELETE, OPTIONS");
//   next();  
// }); 

function callback(err, db) {

    var db = db.db("mydb1");  // database name
    console.log("Mongodb connected successfully");

    ///////////// Authentication /////////////////

    router.route('/login').post((req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        const regex = new RegExp(username, 'i')

        db.collection("login").findOne({
            username: {$regex: regex},
            password: password
        }, function (err, user) {
            if (err) {
                console.log(err);
            }
            if (!user) {
                console.log('User not found');
                return res.send('User not found')
                // return res.status(404).send();
            }
            return res.status(200).send(user);
        })
    })

    router.route('/register').post((req, res) => {
        const user = req.body;
        const regex = new RegExp(user.username, 'i')
        user.superAdmin = false;
        db.collection("login").findOne({'username': {$regex: new RegExp(regex, 'i')}}, (err, userFound) => {
            if (userFound) {
                res.send(false);
            } else {
                db.collection("login").insertOne(user, (error, result) => {
                    if (err) {
                        console.log(err);
                    }
                    return res.status(200).send(true);
                });
            }
        })
    });

    /////////////Instruction for data display/////////////////

    router.route('/display/data').get((req, res) => {

        db.collection("event").aggregate([
            {
                $lookup: {
                    from: "activity",
                    localField: "activityIds",
                    foreignField: "_id",
                    pipeline: [{

                        $lookup: {
                            from: "indicator",
                            localField: "indicatorIds",
                            foreignField: "_id",
                            as: "indicators"
                        }

                    }],
                    as: "activities"
                }
            }
        ]).toArray(function (error, result) {
            if (err) throw error;

            res.send(result);
        });

    });

    router.route('/generate/treeStructure').post((req, res) => {
        const treeStructure = req.body;
        treeStructure.forEach(event => {
            event._id = mongo.ObjectId(event._id);
        })

        db.collection("treeStructure").deleteMany({}, (err, result) => {
            if (err) console.log(err);
            else {
                db.collection("treeStructure").insertMany(treeStructure, (error, results) => {
                    if (error) console.log(error);
                    else {
                        res.status(200).send(true);
                    }
                })
            }
        });
    });

    router.route('/events').get((req, res) => {

        db.collection("event").find().toArray(function (error, result) {
            if (err) throw error;

            res.send(result);
        });

    });

    router.route('/eventsByActivityId/:id').get((req, res) => {

        db.collection("event").find({activityIds: mongo.ObjectId(req.params.id)}).toArray((error, events) => {
            if (error) throw error;
            res.send(events);
        });
    });

    router.route('/activities').get((req, res) => {

        db.collection("activity").find().toArray(function (error, result) {
            if (err) throw error;

            res.send(result);
        });

    });

    router.route('/activities/indicator/:id').get((req, res) => {

        db.collection("activity").find({indicatorIds: mongo.ObjectId(req.params.id)}).toArray((error, activities) => {
            if (error) throw error;
            res.send(activities);
        });

    });

    router.route('/activity/:id/remove').put((req, res) => {
        const indicatorId = mongo.ObjectId(req.body.indicatorId);
        db.collection("activity").find({indicatorIds: mongo.ObjectId(indicatorId)}).toArray( (error, activities) => {
            if (activities.length === 1) {
                res.send(false);
            } else {
                db.collection("activity").updateOne({'_id': mongo.ObjectId(req.params.id)}, {$pull: {indicatorIds: indicatorId}}, (error2, result) => {
                    if (error) {
                        console.log(error2)
                    } else {
                        res.status(200).send(true)
                    }
                });
            }
        })
    });

    router.route('/path/:id').get((req, res) => {

        db.collection("indicator").findOne({_id: mongo.ObjectId(req.params.id)}, (error, indicator) => {
            if (err) throw error;

            db.collection("activity").findOne({"indicatorIds": mongo.ObjectId(req.params.id)}, (error, activity) => {
                if (err) throw error;

                db.collection("event").findOne({"activityIds": mongo.ObjectId(activity._id)}, (error, event) => {
                    if (err) throw error;

                    db.collection("reference").findOne({'referenceNumber': indicator.referenceNumber}, (err, reference) => {
                        if (err) console.log(err);
                        else {
                            const pathObject = {
                                event,
                                activity,
                                indicator,
                                reference
                            }
                            res.send(pathObject);
                        }

                    })
                });
            });
        });
    });

    router.route('/path/reference/:id').get((req, res) => {

        db.collection("reference").findOne({_id: mongo.ObjectId(req.params.id)}, (err, reference) => {
            if (err) console.log(err);

            db.collection("indicator").findOne({'referenceNumber': reference.referenceNumber}, (error, indicator) => {
                if (err) throw error;

                if (indicator) {
                    db.collection("activity").findOne({"indicatorIds": mongo.ObjectId(indicator._id)}, (error, activity) => {
                        if (err) throw error;

                        db.collection("event").findOne({"activityIds": mongo.ObjectId(activity._id)}, (error, event) => {
                            if (err) throw error;
                            else {
                                const pathObject = {
                                    event,
                                    activity,
                                    indicator,
                                    reference
                                }
                                res.send(pathObject);
                            }

                        })
                    });
                } else {
                    const pathObject = {
                        reference,
                        indicator: null,
                        activity: null,
                        event: null
                    }
                    res.send(pathObject)
                }
            });
        });
    });

    ////////////////Read text from pdf //////////////

    var fs = require('fs');


    /////////////Instruction for search data/////////////////

    router.route('/getsearchmetrics').post((req, res) => {
        const metrics_name = req.body.search;


        db.collection("treeStructure").find({'LearningActivities.indicator.metrics': new RegExp(metrics_name)}).toArray(function (error, documents) {
            if (err) throw error;

            res.send(documents);
        });
    });


    router.route('/getsearchindicator').post((req, res) => {
        const search_ind = req.body.search;


        db.collection("treeStructure").find({'LearningActivities.indicator.indicatorName': {$regex: new RegExp(search_ind, "i")}}).toArray(function (error, result) {
            if (err) throw error;

            res.send(result);
        });
    });


    //////////////Indicator Stuff////////////////

    router.route('/indicators').get((req, res) => {

        db.collection("indicator").find().toArray(function (error, result) {
            if (err) throw error;

            res.send(result);
        });

    });

    router.route('/indicator/:id').get((req, res) => {

        db.collection("indicator").findOne({_id: mongo.ObjectId(req.params.id)}, (error, indicator) => {
            if (error) throw error;

            res.send(indicator);
        });

    });

    router.route('/indicator/add').post((req, res) => {
        const activityIds = req.body.activities.map(activity => mongo.ObjectId(activity._id));
        const indicator = req.body.indicator;
        const reference = req.body.reference;

        db.collection('indicator').insertOne(indicator, (error, result) => {
            if (err) {
                console.log(err);
            }
            db.collection("activity").updateMany({'_id': {$in: activityIds}}, {$push: {indicatorIds: indicator._id}}, (error2, result2) => {
                if (error2) {
                    console.log(error2)
                } else {
                    // res.status(200).send(true)
                    if (reference) {
                        db.collection("reference").insertOne(reference, (error, result) => {
                            if (err) {
                                console.log(err);
                            }
                            return res.status(200).send(result);
                        });
                    } else {
                        return res.status(200).send(result2);
                    }
                }
            })
        });
    });

    router.route('/indicator/:id/edit').put((req, res) => {
        const deletedActivityIds = req.body.activitiesDeleted.map(activityId => mongo.ObjectId(activityId));
        const addedActivityIds = req.body.activitiesAdded.map(activityId => mongo.ObjectId(activityId));
        const indicator = req.body.indicator;
        const indicatorId = mongo.ObjectId(req.params.id);

        db.collection("indicator").replaceOne({_id: indicatorId},
            {
                "referenceNumber": indicator.referenceNumber,
                "Title": indicator.Title,
                "metrics": indicator.metrics,
                "summary": indicator.summary,
                "verified": indicator.verified
            },
            (error, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    db.collection("activity").updateMany({'_id': {$in: addedActivityIds}}, {$push: {indicatorIds: indicatorId}}, (error2, result2) => {
                        if (error2) {
                            console.log(error2)
                        }
                        db.collection("activity").updateMany({'_id': {$in: deletedActivityIds}}, {$pull: {indicatorIds: indicatorId}}, (error3, result3) => {
                            if (error2) {
                                console.log(error3)
                            } else {
                                res.status(200).send(result)
                            }
                        })
                    })
                }
            });
    });

    router.route('/indicator/:id/mark').put((req, res) => {
        const mark = req.body.marked;
        const indicatorId = mongo.ObjectId(req.params.id);

        db.collection("indicator").updateOne({_id: indicatorId},
            {
                $set: {reviewExists: mark}
            },
            (error, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).send(result)
                }
            });
    });

    router.route('/indicator/:indicatorId/delete').delete((req, res) => {
        const indicatorId = req.params.indicatorId;
        db.collection("activity").updateMany({"indicatorIds": mongo.ObjectId(indicatorId)}, {
            $pull: {indicatorIds: mongo.ObjectId(indicatorId)}
        }, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                db.collection("indicator").deleteOne({_id: mongo.ObjectId(indicatorId)}, (error, result) => {
                    if (err) {
                        console.log(err);
                    }
                    return res.status(200).send(result);
                });
            }
        })
    });

    router.route('/indicator/verify').put((req, res) => {
        const indicatorId = mongo.ObjectId(req.body.id);

        db.collection("indicator").updateOne({_id: indicatorId},
            {
                $set: { verified: true }
            },
            (error, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(200).send(result);
                }
            });
    });

    /////////////Instruction for references/////////////////

    router.route('/reference').get((req, res) => {
        db.collection("reference").find().toArray((err, data) => {
            if (err)
                console.log(err);
            else
                res.json(data);
        })
    });

    router.route('/reference/:id').get((req, res) => {
        db.collection("reference").findOne({'_id': mongo.ObjectId(req.params.id)}, (err, reference) => {
            if (err)
                console.log(err);
            else
                res.send(reference);
        })
    });

    router.route('/reference/number/:number').get((req, res) => {
        db.collection("reference").findOne({'referenceNumber': req.params.number}, (err, reference) => {
            if (err)
                console.log(err);
            else
                res.send(reference);
        })
    });

    router.route('/reference/:id/edit').put((req, res) => {
        const reference = req.body;
        db.collection("reference").replaceOne({_id: mongo.ObjectId(req.params.id)},
            {
                "referenceNumber": reference.referenceNumber,
                "referenceText": reference.referenceText,
                "link": reference.link,
                "status": reference.status,
                "development": reference.development
            },
            (error, result) => {
                if (err) {
                    console.log(err);
                }
                return res.status(200).send(result);
            });
    });

    router.route('/reference/:referenceId/:referenceNumber/delete').delete((req, res) => {
        db.collection("reference").deleteOne({_id: mongo.ObjectId(req.params.referenceId)}, (error, result) => {
            if (err) {
                console.log(err);
            }
            db.collection("indicator").updateMany({referenceNumber: req.params.referenceNumber}, {$set:{referenceNumber: "[0]"}}, (error, result2) => {
                return res.status(200).send(result2);
            });
        });
    });

    /////////////Instruction for review display/////////////////

    router.route('/display/review/:id').get((req, res) => {

        db.collection("review").find({'indicatorId': req.params.id}).toArray((err, data) => {
            if (err)
                console.log(err);
            else
                res.json(data);
        })

    });

    router.route('/display/review/:id/edit').get((req, res) => {

        db.collection("review").findOne({'_id': mongo.ObjectId(req.params.id)}, (err, data) => {
            if (err)
                console.log(err);
            else
                res.json(data);
        })

    });

    router.route('/display/review/:indicatorId/:username').get((req, res) => {

        db.collection("review").findOne({
                'indicatorId': req.params.indicatorId,
                'name': req.params.username
            }, (err, review) => {
                if (err)
                    console.log(err);
                else
                    res.json(review);
            }
        );
    });

    router.route('/review/add').post((req, res) => {
        const review = req.body;
        db.collection("review").insertOne(review, (error, result) => {
            if (err) {
                console.log(err);
            }
            return res.status(200).send(result);
        });
    });

    router.route('/review/edit').put((req, res) => {
        const review = req.body;
        db.collection("review").replaceOne({_id: mongo.ObjectId(review._id)},
            {
                "indicatorId": review.indicatorId,
                "name": review.name,
                "indicatorQuality": review.indicatorQuality,
                "indicatorQualityNote": review.indicatorQualityNote,
                "articleClarity": review.articleClarity,
                "articleClarityNote": review.articleClarityNote,
                "articleData": review.articleData,
                "articleDataNote": review.articleDataNote,
                "articleAnalysis": review.articleAnalysis,
                "articleAnalysisNote": review.articleAnalysisNote,
                "articleConclusion": review.articleConclusion,
                "articleConclusionNote": review.articleConclusionNote,
                "articleContribution": review.articleContribution,
                "articleContributionNote": review.articleContributionNote
            },
            (error, result) => {
                if (err) {
                    console.log(err);
                }
                return res.status(200).send(result);
            });
    });

    router.route('/review/:reviewId/delete').delete((req, res) => {
        db.collection("review").deleteOne({_id: mongo.ObjectId(req.params.reviewId)}, (error, result) => {
            if (err) {
                console.log(err);
            }
            return res.status(200).send(result);
        });
    });

    ///API///

    // Route for searching acvitivites
    router.route('/api/activities/search').get(async (req, res) => {
        const { name } = req.query;
    
        try {
            // Validate query parameters
            const validParams = ['name'];
            const { valid, invalidKeys } = validateQueryParams(req.query, validParams);
            if (!valid) {
                return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
            }
    
            // Fetch activities
            const { data: activities, indicators } = await fetchDataFromCollection('activity', name);
    
            if (activities.length === 0) {
                return res.status(404).send({ message: "No activities found with the specified name" });
            }
    
            // Find related events
            const activityIds = activities.map(activity => activity._id);
            const events = await db.collection("event").find({ activityIds: { $in: activityIds } }).toArray();
    
            if (events.length === 0) {
                return res.status(404).send({ message: "No events found containing the specified activities" });
            }
    
            // Format the response
            const formattedResponse = formatEvents(events, activities, indicators);
            res.status(200).send(formattedResponse);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Error fetching activities", error: err.message });
        }
    });

    // Route for searching indicators
    router.route('/api/indicators/search').get(async (req, res) => {
        const { name } = req.query;
    
        try {
            // Validate query parameters
            const validParams = ['name'];
            const { valid, invalidKeys } = validateQueryParams(req.query, validParams);
            if (!valid) {
                return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
            }
    
            // Fetch indicators
            const { data: indicators, activities } = await fetchDataFromCollection('indicator', name);
    
            if (indicators.length === 0) {
                return res.status(404).send({ message: "No indicators found with the specified name" });
            }
    
            // Find related activities
            const indicatorIds = indicators.map(indicator => indicator._id);
            const activitiesForIndicators = await db.collection("activity").find({ indicatorIds: { $in: indicatorIds } }).toArray();
    
            if (activitiesForIndicators.length === 0) {
                return res.status(404).send({ message: "No activities found associated with the specified indicators" });
            }
    
            // Find related events
            const activityIds = activitiesForIndicators.map(activity => activity._id);
            const eventsForActivities = await db.collection("event").find({ activityIds: { $in: activityIds } }).toArray();
    
            if (eventsForActivities.length === 0) {
                return res.status(404).send({ message: "No events found containing the specified activities" });
            }
    
            // Format the response
            const formattedResponse = formatEvents(eventsForActivities, activitiesForIndicators, indicators);
            res.status(200).send(formattedResponse);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Error fetching indicators", error: err.message });
        }
    });

    // Route for searching metrics
    router.route('/api/metrics/search').get(async (req, res) => {
        const { name } = req.query;
    
        try {
            // Validate query parameters
            const validParams = ['name'];
            const { valid, invalidKeys } = validateQueryParams(req.query, validParams);
            if (!valid) {
                return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
            }
    
            // Define the query to find indicators by metrics
            const metricsQuery = name ? { metrics: { $regex: name, $options: 'i' } } : {};
            const indicators = await db.collection("indicator").find(metricsQuery).toArray();
    
            if (indicators.length === 0) {
                return res.status(404).send({ message: "No indicators found with the specified metric" });
            }
    
            // Get all activity IDs associated with the found indicators
            const indicatorIds = indicators.map(indicator => indicator._id);
            const activities = await db.collection("activity").find({ indicatorIds: { $in: indicatorIds } }).toArray();
    
            if (activities.length === 0) {
                return res.status(404).send({ message: "No activities found associated with the specified metrics" });
            }
    
            // Get all event IDs associated with the found activities
            const activityIds = activities.map(activity => activity._id);
            const events = await db.collection("event").find({ activityIds: { $in: activityIds } }).toArray();
    
            if (events.length === 0) {
                return res.status(404).send({ message: "No events found containing the specified activities" });
            }
    
            // Format the response
            const formattedResponse = formatEvents(events, activities, indicators);
            res.status(200).send(formattedResponse);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Error fetching metrics", error: err.message });
        }
    });

    // Route for fetching events
    router.route('/api/events').get(async (req, res) => {
        const validParams = ['name'];
        const { valid, invalidKeys } = validateQueryParams(req.query, validParams);

        if (!valid) {
            return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
        }
        const { name } = req.query;
        try {
            const eventsResponse = await fetchDataFromCollection('event', name);
            if (eventsResponse.data.length === 0) {
                return res.status(404).send({ message: "No events found" });
            }
            const formattedResponse = formatEvents(eventsResponse.data, eventsResponse.activities, eventsResponse.indicators);
            res.status(200).send(formattedResponse);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Error fetching events", error: err.message });
        }
    });

    // Route for fetching activities
    router.route('/api/activities').get(async (req, res) => {
        const { name } = req.query;
        const validParams = ['name'];
        const { valid, invalidKeys } = validateQueryParams(req.query, validParams);

        if (!valid) {
            return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
        }
        try {
            const activitiesResponse = await fetchDataFromCollection('activity', name);
            if (activitiesResponse.data.length === 0) {
                return res.status(404).send({ message: "No activities found" });
            }
            const formattedResponse = formatActivities(activitiesResponse.data, activitiesResponse.indicators);
            res.status(200).send(formattedResponse);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Error fetching activities", error: err.message });
        }
    });

    // Route for fetching indicators
    router.route('/api/indicators').get(async (req, res) => {
        const { name } = req.query;
        const validParams = ['name'];
        const { valid, invalidKeys } = validateQueryParams(req.query, validParams);

        if (!valid) {
            return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
        }
        try {
            const indicatorsResponse = await fetchDataFromCollection('indicator', name);
            if (indicatorsResponse.data.length === 0) {
                return res.status(404).send({ message: "No indicators found" });
            }
            const formattedResponse = formatIndicators(indicatorsResponse.data);
            res.status(200).send(formattedResponse);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Error fetching indicators", error: err.message });
        }
    });

    // Route for fetching references
    router.route('/api/references').get(async (req, res) => {
        // Validate query parameters
        const { referenceNumber } = req.query;
        const validParams = ['referenceNumber'];
        const { valid, invalidKeys } = validateQueryParams(req.query, validParams);
        if (!valid) {
            return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
        }
        try
        {
            let references;
            const query = referenceNumber ? { referenceNumber: { $regex: referenceNumber.replace(/[\[\]]/g, '\\$&') , $options: 'i' }} : {};

            if (referenceNumber && referenceNumber.startsWith("'") && referenceNumber.endsWith("'")) {
                const trimmedNumber = referenceNumber.slice(1, -1);
                const trimmedQuery = { referenceNumber: trimmedNumber};
                references = await db.collection("reference").find(trimmedQuery).toArray();
            } else {
                references = await db.collection("reference").find(query).toArray();
            }

            if (references.length === 0) {
                return res.status(404).send({ message: "No references found with the specified reference number" });
            }
            res.status(200).send(formatReferences(references));
        }
        catch (err){
            console.error(err);
            res.status(500).send({ message: "Error fetching reference", error: err.message });
        }
    });

    // Combined route for fetching all data
    router.route('/api/general').get(async (req, res) => {
        const { name } = req.query;
        const validParams = ['name'];
        const { valid, invalidKeys } = validateQueryParams(req.query, validParams);

        if (!valid) {
            return res.status(400).send({ message: "Invalid query parameter(s)", invalidKeys });
        }

        try {
            const combinedResponse = {};

            // Fetch data for events
            const eventsResponse = await fetchDataFromCollection('event', name);
            if (eventsResponse.data.length > 0) {
                combinedResponse.events = formatEvents(eventsResponse.data, eventsResponse.activities, eventsResponse.indicators);
            }

            // Fetch data for activities
            const activitiesResponse = await fetchDataFromCollection('activity', name);
            if (activitiesResponse.data.length > 0) {
                combinedResponse.activities = formatActivities(activitiesResponse.data, activitiesResponse.indicators);
            }

            // Fetch data for indicators
            const indicatorsResponse = await fetchDataFromCollection('indicator', name);
            if (indicatorsResponse.data.length > 0) {
                combinedResponse.indicators = formatIndicators(indicatorsResponse.data);
            }

            // Check if the combined response is empty
            if (Object.keys(combinedResponse).length === 0) {
                return res.status(404).send({ message: "No data found" });
            }

            // Send the combined response
            res.status(200).send(combinedResponse);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Error fetching data", error: err.message });
        }
    });  

    ///API Helpers

    // Helper function to format events
    function formatEvents(events, activities, indicators) {
        return events.map(event => {
            const associatedActivities = activities.filter(activity => event.activityIds.map(id => id.toString()).includes(activity._id.toString()));
            const activityObjects = associatedActivities.map(activity => {
                const associatedIndicators = indicators.filter(indicator => activity.indicatorIds.map(id => id.toString()).includes(indicator._id.toString()));
                const indicatorObjects = formatIndicators(associatedIndicators);
                return {
                    activity: activity.name,
                    indicators: indicatorObjects
                };
            });
            return {
                event: event.name,
                activities: activityObjects
            };
        });
    }

    // Helper function to format activities
    function formatActivities(activities, indicators) {
        return activities.map(activity => {
            const associatedIndicators = indicators.filter(indicator => activity.indicatorIds.map(id => id.toString()).includes(indicator._id.toString()));
            const indicatorObjects = formatIndicators(associatedIndicators);
            return {
                activity: activity.name,
                indicators: indicatorObjects
            };
        });
    }

    // Helper function to format indicators
    const formatIndicators = (indicators) => {
        return indicators.map(indicator => {
            const metricsArray = indicator.metrics ? indicator.metrics.split(',').map(metric => metric.trim()) : [];
            const responseObject = {
                indicator: indicator.Title,
                referenceNumber: indicator.referenceNumber,
                metrics: metricsArray
            };
            if (indicator.summary) {
                responseObject.summary = indicator.summary;
            }
            return responseObject;
        });
    };

    // Helper function to format references
    const formatReferences = (references) => {
        return references.map(reference => {
            const responseObject = {
                referenceNumber: reference.referenceNumber,
                referenceText: reference.referenceText,
                link: reference.link
            };
            return responseObject;
        });
    };

    // Helper function to fetch data from a given collection
    async function fetchDataFromCollection(collectionName, name) {
        // Determine the query field based on the collection
        const queryField = collectionName === 'indicator' ? 'Title' : 'name';
        const escapedName = name ? name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';   
        const query = escapedName ? { [queryField]: { $regex: escapedName, $options: 'i' } } : {};
        let data;
    
        // Fetch data based on name and single or multiple results
        if (name && name.startsWith("'") && name.endsWith("'")) {
            const trimmedName = name.slice(1, -1);
            const exactMatchPattern = `^${trimmedName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`;
            const trimmedQuery = { [queryField]: { $regex: exactMatchPattern, $options: 'i' } };
            data = await db.collection(collectionName).find(trimmedQuery).toArray();
        } else {
            data = await db.collection(collectionName).find(query).toArray();
        }

        if (data.length === 0) 
            return { data: [], activities: [], indicators: [] };
    
        // Get related data
        let activities = [];
        let indicators = [];
    
        if (collectionName === 'event') {
            const activityIds = data.flatMap(item => item.activityIds.map(id => mongo.ObjectId(id)));
            if (activityIds.length > 0) {
                activities = await db.collection("activity").find({ _id: { $in: activityIds } }).toArray();
                const indicatorIds = activities.flatMap(activity => activity.indicatorIds.map(id => mongo.ObjectId(id)));
                if (indicatorIds.length > 0) {
                    indicators = await db.collection("indicator").find({ _id: { $in: indicatorIds } }).toArray();
                }
            }
        } else if (collectionName === 'activity') {
            const indicatorIds = data.flatMap(item => item.indicatorIds.map(id => mongo.ObjectId(id)));
            if (indicatorIds.length > 0) {
                indicators = await db.collection("indicator").find({ _id: { $in: indicatorIds } }).toArray();
            }
        }
    
        return { data, activities, indicators };
    }

    const validateQueryParams = (query, validParams) => {
        const queryKeys = Object.keys(query);
        if (queryKeys.length > validParams.length || !queryKeys.every(key => validParams.includes(key))) {
            const invalidKeys = queryKeys.filter(key => !validParams.includes(key));
            return { valid: false, invalidKeys };
        }
        return { valid: true };
    };
    ///End of API
}



MongoClient.connect(dockerURL , {useUnifiedTopology: true}, function (err, db) {
  if (err) MongoClient.connect(mongoURL, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    else callback(err, db)
  })
  else callback(err, db)
});

app.get("/" + BASE_ROUTE, (req, res) => res.send('HELLO! From Backend'));
app.use("/" + BASE_ROUTE, router);
app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`)
);