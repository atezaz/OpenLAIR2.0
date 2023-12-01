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

//var mongoURL = "mongodb://mongo:27017/" //Local MongoDB Docker (mongo)


//console.log(mongoURL);

const PORT = process.env.PORT || 3001;
console.log("Port: ");
console.log(PORT)
const BASE_ROUTE = "openlair"; //var url = "mongodb://localhost:27017/";

const app = (0, _express.default)();

const router = _express.default.Router();

app.use((0, _cors.default)());
app.use(_bodyParser.default.json()); // app.use((req, res, next)=>{  
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(  
//     "Access-Control-Allow-Headers",  
//     "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader("Access-Control-Allow-Methods",  
//     "GET, POST, PATCH, DELETE, OPTIONS");
//   next();  
// }); 

MongoClient.connect(mongoURL, {useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;
    var db = db.db("mydb1");  // database name
    console.log("Mongodb connected successfully");

    ///////////// Authentication /////////////////

    router.route('/login').post((req, res) => {
        var username = req.body.username;
        var password = req.body.password;

        db.collection("login").findOne({
            username: username,
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

    router.route('/events').get((req, res) => {

        db.collection("event").find().toArray(function (error, result) {
            if (err) throw error;

            res.send(result);
        });

    });

    router.route('/activities').get((req, res) => {

        db.collection("activity").find().toArray(function (error, result) {
            if (err) throw error;

            res.send(result);
        });

    });

    router.route('/path/:id').get((req, res) => {

        db.collection("indicator").findOne({_id: mongo.ObjectId(req.params.id)}, (error, indicator) => {
            if (err) throw error;

            db.collection("activity").findOne({"indicatorIds": mongo.ObjectId(req.params.id)}, (error, activity) => {
                if (err) throw error;

                db.collection("event").findOne({"activityIds": mongo.ObjectId(activity._id)}, (error, event) => {
                    if (err) throw error;

                    const pathObject = {
                        event,
                        activity,
                        indicator
                    }
                    res.send(pathObject);
                });
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

        db.collection("indicator").findOne({_id: mongo.ObjectId(req.params.id)},(error, indicator) => {
            if (error) throw error;

            res.send(indicator);
        });

    });

    router.route('/indicator/add').post((req, res) => {
        const activityId = req.body.activity._id;
        const indicator = req.body.indicator;

        db.collection('indicator').insertOne(indicator, (error, result) => {
            if (err) {
                console.log(err);
            }
            db.collection("activity").updateOne({'_id': mongo.ObjectId(activityId)}, {$push: {indicatorIds: indicator._id}}, (error2, result2) => {
                if (error2) {
                    console.log(error2)
                } else {
                    res.status(200).send(true)
                }
            })
        });
    });

    router.route('/indicator/:id/edit').put((req, res) => {
        const indicator = req.body;
        db.collection("indicator").replaceOne({_id: mongo.ObjectId(req.params.id)},
            {
                "referenceNumber": indicator.referenceNumber,
                "Title": indicator.Title,
                "metrics": indicator.metrics,
            },
            (error, result) => {
                if (err) {
                    console.log(err);
                }
                return res.status(200).send(result);
            });
    });

    router.route('/indicator/:indicatorId/delete').delete((req, res) => {
        const indicatorId = req.params.indicatorId;
        db.collection("activity").updateMany({"activityIds._id": indicatorId}, {
            $pull: {activityIds: {indicatorId}}
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

    router.route('/reference/add').post((req, res) => {
        const reference = req.body;
        db.collection("reference").insertOne(reference, (error, result) => {
            if (err) {
                console.log(err);
            }
            return res.status(200).send(result);
        });
    });

    router.route('/reference/:id/edit').put((req, res) => {
        const reference = req.body;
        db.collection("reference").replaceOne({_id: mongo.ObjectId(req.params.id)},
            {
                "referenceNumber": reference.referenceNumber,
                "referenceText": reference.referenceText,
                "link": reference.link,
            },
            (error, result) => {
                if (err) {
                    console.log(err);
                }
                return res.status(200).send(result);
            });
    });

    router.route('/reference/:referenceId/delete').delete((req, res) => {
        db.collection("reference").deleteOne({_id: mongo.ObjectId(req.params.referenceId)}, (error, result) => {
            if (err) {
                console.log(err);
            }
            return res.status(200).send(result);
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

        db.collection("review").findOne({'_id': mongo.ObjectId(req.params.id)},(err, data) => {
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

});

app.get("/" + BASE_ROUTE, (req, res) => res.send('HELLO! From Backend'));
app.use("/" + BASE_ROUTE, router);
app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`)
);