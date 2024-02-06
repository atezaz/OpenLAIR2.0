import {
    Component,
    OnInit,
    ViewChild,
} from "@angular/core";
import {DataService} from "../../data.service";
import {Router} from "@angular/router";
import {data} from "../../_models/data.model";
import {MatSnackBar} from "@angular/material";
import {MatDialog} from "@angular/material/dialog";
import {NgModel} from "@angular/forms";
import {BrowserModule, DomSanitizer} from "@angular/platform-browser";
// This element import needs top stay!!! Very important
import {element} from "protractor";
import {ChartHelperService} from "src/app/chart-helper.service";
import {review} from "../../_models/review.model";
import {Observable} from "rxjs";
import {LearningEvent} from "../../_models/learningEvent.model";
import {map, tap} from "rxjs/operators";
import {indicator} from "../../_models/indicator.model";
import {HeaderService} from "../header/header.service";
import {LearningActivity} from "../../_models/learningActivity.model";
import {User} from "../../_models";

@Component({
    selector: "app-display",
    templateUrl: "./display.component.html",
    styleUrls: ["./display.component.css"],
})
export class DisplayComponent implements OnInit {
    @ViewChild("secondDialog", {static: true}) secondDialog: any;
    @ViewChild("reviewDialog", {static: true}) reviewDialog: any;
    @ViewChild("verdictDialog", {static: true}) verdictDialog: any;
    @ViewChild("deleteDialog", {static: true}) deleteDialog: any;
    name = [];
    dropdownSettings: any;
    data: LearningEvent[];
    options = []; // learning events options
    searchInd: string; //textbox value
    searchMat: string; //textbox value
    element = document.getElementById("header");

    ind_list = [];
    metrics: any;
    metrics_list: string[];
    loggedIn: User;
    treeData$: Observable<LearningEvent[]>;
    learningEventsOptions$: Observable<string[]>;
    selectedLearningEvents$: Observable<LearningEvent[]>;
    learningActivitiesOptions$: Observable<string[]>;
    tableData$: Observable<LearningEvent[]>;
    checkedMap: Map<string, boolean> = new Map<string, boolean>();
    indicatorMap: Map<string, indicator> = new Map<string, indicator>();
    private allEventOptions: string[];
    selectedLearningEvents: string[] = [];
    private previousSelectedEvents: string[] = [];
    selectedLearningActivities: string[] = [];
    metricsIndicatorTitle: string;

    constructor(
        private dataService: DataService,
        private chartHelperService: ChartHelperService,
        private router: Router,
        private snackbar: MatSnackBar,
        public dialog: MatDialog,
        private sanitizer: DomSanitizer,
        private headerTemplateService: HeaderService
    ) {
        this.headerTemplateService.setHeader('display');
        this.loggedIn = JSON.parse(localStorage.getItem('currentUser'));
        this.treeData$ = this.dataService.getdata();
    }

    ngOnInit() {
        this.fetchdata();
        this.loadScript();
        this.dropdownSettings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "Deselect All",
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
    }

    // fetches Data from Database and retrieves previous selected Entities from LocalStorage to initialize with
    fetchdata() {
        const previousSelectedEvents: string[] = JSON.parse(localStorage.getItem('selectedEventsInit'));
        const previousSelectedActivities: string[] = JSON.parse(localStorage.getItem('selectedActivitiesInit'));
        const previousSelectedIndicators: indicator[] = JSON.parse(localStorage.getItem('selectedIndicatorsInit'));
        this.learningEventsOptions$ = this.dataService.getEvents().pipe(
            map(learningEvents => {
                return learningEvents.map(learningEvent => {
                    return learningEvent.name;
                })
            }),
            tap(options => {
                this.allEventOptions = options;
                this.initFromLocalStorage(previousSelectedEvents, previousSelectedActivities, previousSelectedIndicators);
            })
        )
    }

    //Initializes Dropdowns and selected Indicators with given attributes
    private initFromLocalStorage(events: string[], activities: string[], indicators: indicator[]) {
        if (events) {
            this.onEventValueChange(events, true);
            this.selectedLearningEvents = events;
        } else {
            this.onEventValueChange(this.allEventOptions, true);
        }
        if (activities) {
            this.selectedLearningActivities = activities;
            this.onActivitySelectChange();
        }
        if (indicators) {
            indicators.forEach(indicator => {
                this.checkedMap.set(indicator._id, true);
                this.indicatorMap.set(indicator._id, indicator)
            })
            localStorage.setItem("selectedIndicatorsInit", JSON.stringify(indicators))
            this.ind_list = indicators.map(indicator => indicator.Title);
        }
    }

    // Handles changes in the Event Dropdown. Filters TableData and options for activity dropdown corresponding
    // to selected Events. Saves selected Events in LocalStorage
    onEventValueChange(eventValue: string[], init: boolean) {
        if (this.eventsChanged(eventValue) || init) {
            if (eventValue.length === 0) {
                eventValue = this.allEventOptions;
            }
            this.resetTable(true);
            this.selectedLearningEvents$ = this.treeData$.pipe(
                map(learningEvents => {
                    return learningEvents.filter(learningEvent => eventValue.includes(learningEvent.name));
                }));

            this.tableData$ = this.selectedLearningEvents$;

            this.learningActivitiesOptions$ = this.tableData$.pipe(
                map(learningEvents => {
                    return [].concat(...learningEvents.map(learningEvent => learningEvent.activities))
                }),
                map((learningActivities: LearningActivity[]) => {
                    return [...new Set(learningActivities.map(learningActivity => learningActivity.name))];
                })
            )

            setTimeout(() => {
                localStorage.setItem("selectedEventsInit", JSON.stringify(this.selectedLearningEvents));
            });
        }
    }

    eventsChanged(currentEvents: string[]) {
        const eventSet: Set<string> = new Set([...this.previousSelectedEvents, ...currentEvents]);
        return [...eventSet.values()].length !== this.previousSelectedEvents.length || [...eventSet.values()].length !== currentEvents.length;
    }

    onOpen() {
        this.previousSelectedEvents = this.selectedLearningEvents;
    }

    // resets the Table and clears table data stored in LocalStorage
    private resetTable(withActivities?: boolean) {
        if (withActivities) {
            this.selectedLearningActivities = []; //empty the seleted list of Activities after event change
            localStorage.removeItem("selectedActivitiesInit");
        }
        this.ind_list = [];  //empty the seleted list of indicators after event an Event change
        this.indicatorMap.clear();
        this.checkedMap.clear();
        localStorage.removeItem("selectedIndicatorsInit")
        this.searchInd = ""; //empty
        this.searchMat = ""; //empty
    }

    // Filters TableData corresponding to selected Activities and save those in LocalStorage
    onActivitySelectChange() {
        this.resetTable();
        this.determineTableDataBySelectedEventsAndActivities();
        setTimeout(() => {
            localStorage.setItem("selectedActivitiesInit", JSON.stringify(this.selectedLearningActivities));
        });
    }

    // Filters Table Data depending on Events and Activities selected
    private determineTableDataBySelectedEventsAndActivities() {
        if (this.selectedLearningActivities.length === 0) {
            this.tableData$ = this.selectedLearningEvents$
        } else {
            this.tableData$ = this.selectedLearningEvents$.pipe(
                // remove Activities from Events which are not selected
                map(learningEvents => {
                    return learningEvents.map(learningEvent => {
                        learningEvent.activities = learningEvent.activities.filter(activity => {
                            return this.selectedLearningActivities.includes(activity.name);
                        })
                        return learningEvent;
                    })
                }),
                // remove Events which have no Activity left
                map(learningEvents => {
                    return learningEvents.filter(learningEvent => learningEvent.activities.length > 0);
                })
            );
        }
    }

    // Filters Table Data depending on Search Strings entered in Indicator and Metric Search
    determineFilteredTableDataByIndicatorAndMetricText() {
        const indicatorFiltered = (this.searchInd && this.searchInd  !== "");
        const metricFiltered = (this.searchMat && this.searchMat  !== "");
        if (!indicatorFiltered && !metricFiltered) {
            this.determineTableDataBySelectedEventsAndActivities();
        } else {
            if (indicatorFiltered) {
               this.filterTableDataByIndicatorSearch();
            }
            if (metricFiltered) {
                this.filterTableDataByMetricSearch();
            }
        }
    }

    filterTableDataByIndicatorSearch() {
        this.tableData$ = this.tableData$.pipe(
            map(learningEvents => {
                return learningEvents.map(event => {
                    event.activities.map(activity => {
                        activity.indicators = activity.indicators.filter(indicator => {
                            return `${indicator.Title} ${indicator.referenceNumber}`.toLowerCase().includes(this.searchInd.toLowerCase());
                        })
                        return activity;
                    })
                    event.activities = event.activities.filter(activity => activity.indicators.length > 0);
                    return event;
                })
            }),
            map(learningEvents => {
                return learningEvents.filter(learningEvent => learningEvent.activities.length > 0);
            })
        )
    }

    filterTableDataByMetricSearch() {
        this.tableData$ = this.tableData$.pipe(
            map(learningEvents => {
                return learningEvents.map(event => {
                    event.activities.map(activity => {
                        activity.indicators = activity.indicators.filter(indicator => {
                            return indicator.metrics.toLowerCase().includes(this.searchMat.toLowerCase());
                        })
                        return activity;
                    })
                    event.activities = event.activities.filter(activity => activity.indicators.length > 0);
                    return event;
                })
            }),
            map(learningEvents => {
                return learningEvents.filter(learningEvent => learningEvent.activities.length > 0);
            })
        )
    }

    // pop up by click Indicator to show meterics
    getMeterics(indicator: indicator) {
        this.metrics_list = indicator.metrics.split(",");
        this.metricsIndicatorTitle = indicator.Title
        this.dialog.open(this.secondDialog);
    }

    //function for checkbox to select indicator and save selection in LocalStorage
    onCheckboxChange(indic: indicator) {
        const checked = !this.checkedMap.get(indic._id)
        this.checkedMap.set(indic._id, checked);
        if (checked) {
            this.ind_list.push(indic.Title)
            this.indicatorMap.set(indic._id, indic);
        } else {
            console.log(this.ind_list)
            console.log(indic.Title)
            console.log(this.ind_list.indexOf(indic.Title))
            const index = this.ind_list.indexOf(indic.Title);
            if (index !== -1) {
                this.ind_list.splice(index, 1);
                this.indicatorMap.set(indic._id, null);
            }
        }
        setTimeout(() => {
            localStorage.setItem("selectedIndicatorsInit", JSON.stringify([...this.indicatorMap.values()].filter(i => i)));
        });
    }

    // method to check if at least one indicator is selected
    atLeastOneChecked() {
        return [...this.checkedMap.values()].includes(true);
    }

    // Transforms selected indicators into a downloadable .txt file
    textClicked() {
        const selectedIndicatorList = [...this.indicatorMap.values()].filter(indicator => indicator);
        const mimeType = 'text/plain';
        const filename = 'Indicators TEXT.txt';
        if (selectedIndicatorList.length > 0) {
            const content = selectedIndicatorList.map((indicator, index) => {
                return `${index + 1} Indicator Name: ${indicator.Title}${indicator.referenceNumber}\n\tMetrics: ${indicator.metrics}\n\n`
            }).join('')

            var a = document.createElement('a')
            var blob = new Blob([content], {type: mimeType})
            var url = URL.createObjectURL(blob)
            a.setAttribute('href', url)
            a.setAttribute('download', filename)
            a.click()
        } else {
            window.alert("No indicator is selected");
        }

    }

    // Transforms selected indicators into a downloadable .json file
    jsonClicked() {
        const selectedIndicatorList = [...this.indicatorMap.values()].filter(indicator => indicator);
        if (selectedIndicatorList.length > 0) {
            const indicatorObjects = selectedIndicatorList.map(indicator => {
                return {[`${indicator.Title}${indicator.referenceNumber}`]: indicator.metrics.split(",")}
            })

            // Convert the text to BLOB.
            let textToBLOB = new Blob(
                [
                    JSON.stringify({
                        indicator: indicatorObjects,
                    }),
                ],
                {type: "application/json"}
            );

            let sFileName = "indicators JSON.json"; // The file to save the data.

            let newLink = document.createElement("a");
            newLink.download = sFileName;
            if ((window as any).webkitURL != null) {
                newLink.href = (window as any).webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                // document.body.appendChild(newLink);
            }
            newLink.click();
        } else {
            window.alert("No indicator is selected");
        }
    };

    // removes all saved Table states from LocalStorage and clears all selected Events/Activities/Indicators
    reset() {
        localStorage.removeItem("selectedEventsInit");
        localStorage.removeItem("selectedActivitiesInit");
        localStorage.removeItem("selectedIndicatorsInit");
        this.ind_list = [];
        this.checkedMap.clear();
        this.indicatorMap.clear();
        this.selectedLearningEvents = [];
        this.onEventValueChange(this.allEventOptions, true);
        localStorage.removeItem("check");
    }

    /*
      This function pushes all selected indicators in an array
      and stores them in localStorage, so the drop down menu in the dashboard page can display the selected indicators even after refreshing the page
      We also store the "check" property in localStorage so the check marks stay checked when the user returns to the display component
      */
    visualizeClicked() {
        const indicatorNames: string[] = [];
        const indicatorReferences: string[] = [];
        //our Map of selected indicators is transformed to an Array of [indicatorReference, indicator]
        [...this.indicatorMap.entries()].forEach(array => {
            if (array[1]) {
                indicatorReferences.push(array[1].referenceNumber);
                indicatorNames.push(array[1].Title);
            }
        })

        //this.chartHelperService.setSettings("selectedLearningEvents", selectedLearningEvents);
        this.chartHelperService.setSettings("selectedIndicators", indicatorNames);
        this.chartHelperService.setSettings("referenceNumbers", indicatorReferences);
        if (indicatorNames.length > 0) {
            localStorage.setItem("selectedEventsInit", JSON.stringify(this.selectedLearningEvents));
            localStorage.setItem("selectedActivitiesInit", JSON.stringify(this.selectedLearningActivities));
            localStorage.setItem("selectedIndicatorsInit", JSON.stringify([...this.indicatorMap.values()].filter(i => i)));
            this.router.navigate(["/dashboard"]);
        } else {
            window.alert("No indicator is selected");
        }
    };

    // Scrolls back to the top of the page
    backToTop() {
        this.element.scrollIntoView({behavior: "smooth"});
    }

    //will solve the issue of comming back from another page
    loadScript() {
        let node = document.createElement("script"); // create script tag
        node.src = "assets/js/tooltipJS.js"; // set source
        node.type = "text/javascript";
        node.async = true; // makes script run asynchronously
        node.charset = "utf-8";
        // append to head of document
        document.getElementsByTagName("head")[0].appendChild(node);
    }

    // method to open the review Dialog
    onReview(indicator: indicator) {
        this.dialog.open(this.reviewDialog, {data: indicator});
    }

    // method to open the verdict Dialog
    onVerdict(indicator: indicator) {
        this.metricsIndicatorTitle = indicator.Title.trim();
        this.dataService.getReferenceByReferenceNumber(indicator.referenceNumber).subscribe(reference => {
            if (reference) {
                this.dialog.open(this.verdictDialog, {data: reference});
            } else {
                window.alert('Reference has been deleted.')
            }
        })
    }

    onDelete(data: any) {
        this.dialog.open(this.deleteDialog, {data: {indicator: data.indicator, activity: data.activity}});
    }

    // navigates to logIn
    logIn() {
        this.router.navigate(['/login'], {state: {url: '/', additionalInfo: null}});
    }

    // logs out user => clear currentUser data from LocalStorage
    logout() {
        localStorage.removeItem('currentUser');
        this.loggedIn = undefined;
    }

    // clears indicator from selected indicators if indicator gets deleted
    indicatorDeleted(indicator: indicator) {
        if (this.checkedMap.get(indicator._id)) {
            this.onCheckboxChange(indicator);
        }
    }

    // method to generate the old/previous Tree Structure DataBase and export it as .json file
    generateTreeStructure() {
        this.dataService.getdata().subscribe(treeDataNew => {
            const oldTreeStructure = treeDataNew.map(event => {
                return {
                    LearningEvents: event.name,
                    LearningActivities: event.activities.map(activity => {
                        return {
                            Name: activity.name,
                            indicator: activity.indicators.map(indicator => {
                                return {
                                    indicatorName: indicator.Title.trim() + " " + indicator.referenceNumber,
                                    metrics: indicator.metrics
                                }
                            })
                        }
                    })
                }
            });
            this.dataService.generateOldTreeStructure(oldTreeStructure).subscribe(success => {
                if (success) {
                    window.alert("Successfully generated TreeStructure");
                } else {
                    window.alert("Could not generate TreeStructure. Further information can be found in the logs");
                }
            });

            this.exportToJSON(oldTreeStructure);
        })
    }

    // method to export the given treeStructure as Json
    private exportToJSON(oldTreeStructure) {
        // Convert the text to BLOB.
        let textToBLOB = new Blob(
            [
                JSON.stringify(oldTreeStructure),
            ],
            {type: "application/json"}
        );

        let sFileName = "treeStructure.json"; // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if ((window as any).webkitURL != null) {
            newLink.href = (window as any).webkitURL.createObjectURL(textToBLOB);
        } else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            // document.body.appendChild(newLink);
        }
        newLink.click();
    }

    // method to navigate to the Reference edit of the Reference which belongs to the omitted id
    editReference(id: string) {
        this.router.navigate([`reference/${id}/edit`]);
    }

    deleteIndicator(indicator: any) {
            if (confirm("Do you really want to delete this Indicator?")) {
                this.indicatorDeleted(indicator);
                this.dataService.deleteIndicator(indicator._id).subscribe(() => {
                    this.fetchdata();
                });
            }
        }

    removeIndicatorFromActivity(data: any) {
        this.dataService.removeIndicatorFromActivity(data.activity._id, data.indicator._id).subscribe(success => {
            if (success) {
                this.fetchdata();
            } else {
                if (confirm('This activity is the only one assigned to the indicator. Do you wish to delete the entire indicator?')) {
                    this.indicatorDeleted(data.indicator);
                    this.dataService.deleteIndicator(data.indicator._id).subscribe(() => {
                        this.fetchdata();
                    });
                }
            }
        })
    }
}
