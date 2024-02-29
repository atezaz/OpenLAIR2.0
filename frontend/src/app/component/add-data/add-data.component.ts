import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LearningActivity} from "../../_models/learningActivity.model";
import {indicator} from "../../_models/indicator.model";
import {Reference} from "../../_models/reference.model";
import {HeaderService} from "../header/header.service";
import {Observable} from "rxjs";
import {shareReplay} from "rxjs/operators";
import {PathObject} from "../../_models/pathObject.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-add-data',
    templateUrl: './add-data.component.html',
    styleUrls: ['./add-data.component.css']
})


export class AddDataComponent implements OnInit {
    @ViewChild("activityDialog", {static: true}) activityDialog: any;
    @ViewChild("normalUserSaveDialog", {static: true}) normalUserSaveDialog: any;

    data: PathObject;
    private target: string;

    //NEW Stuff

    showActivityMessages: boolean = false;
    activityMessages: string[] = [];
    affectedEvents: Set<string> = new Set<string>();
    CUserName: any;
    superAdmin: boolean;
    indicatorForm: FormGroup;
    referenceForm: FormGroup;

    learningActivitiesOptions: LearningActivity[];
    indicatorOptions$: Observable<indicator[]>;
    referenceOptions: Reference[];

    indicatorId: string;
    useExistingReference: boolean = false;
    private previousReferenceName: string;
    private previousReferenceLink: string;
    private previousReferenceVerified: boolean;
    private previousReferenceDevelopment: boolean;
    private newReferenceNumber: string;
    private existingReferenceNumber: string;

    verifiedOptions: string[] = ['verified', 'not verified', 'not mentioned'];
    developmentOptions: string[] = ['developed', 'proposed', 'not mentioned'];
    referenceZero = false;

    dropdownSettings = {
        singleSelection: false,
        idField: "_id",
        textField: "name",
        selectAllText: "Select All",
        unSelectAllText: "Deselect All",
        itemsShowLimit: 3,
        allowSearchFilter: true,
    };

    selectedLearningActivities: LearningActivity[] = [];
    originallySelectedLearningActivities: LearningActivity[];

    /*
    * initializes the add-data page depending on if it is a completely new object,
    * an indicator is being edited, or a reference is being edited.
    * */
    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
                headerService: HeaderService, public dialog: MatDialog) {
        headerService.setHeader('add-indicator')

        if (localStorage.getItem('currentUser')) {
            this.CUserName = JSON.parse(localStorage.getItem('currentUser')).username;
            this.superAdmin = JSON.parse(localStorage.getItem('currentUser')).superAdmin;
        }

        //target determines which mode we're currently in(new indicator/edit indicator/edit reference)
        this.target = this.route.snapshot.data.target;
        this.data = this.route.snapshot.data.data;
        if (this.data.reference) {
            this.existingReferenceNumber = this.data.reference.referenceNumber;
        }
        if (this.data.indicator) {
            this.indicatorId = this.data.indicator._id;
            this.existingReferenceNumber = this.data.indicator.referenceNumber;
        }
        //boolean set to true if resource on indicator has been deleted.
        this.referenceZero = this.existingReferenceNumber === '[0]';

        //// form entries///////
        this.indicatorForm = this.fb.group({
            learningActivities: [{value: [], disabled: this.target}, Validators.required],
            indicatorName: [{value: null, disabled: this.readonly('reference')}, Validators.required],
            metrics: [{value: null, disabled: this.readonly('reference')}, Validators.required],
            referenceNumber: [{value: null, disabled: true}, Validators.required],
            summary: [{value: null, disabled: this.readonly('reference')}],
            verified: [{value: this.superAdmin, disabled: this.readonly('reference')}]
        });

        this.referenceForm = this.fb.group({
            referenceText: [null, Validators.required],
            referenceLink: [null, Validators.required],
            referenceNumber: [{value: null, disabled: true}, Validators.required],
            verified: [null],
            development: [null],
            checkbox: [{value: false, disabled: this.readonly('reference')}],
        });

        //subscription to update the referenceNumber in the indicator-form if changed in the reference-form
        this.referenceForm.controls['referenceNumber'].valueChanges.subscribe(value => this.indicatorForm.controls['referenceNumber'].setValue(value));

        //gathering all activities of indicator, in case of indicator edit mode
        if (this.target === 'indicator') {
            this.dataService.getActivitiesByIndicatorId(this.indicatorId).subscribe(learningActivities => {
                this.originallySelectedLearningActivities = learningActivities;
                this.selectedLearningActivities = learningActivities
                this.learningActivityiesSelected();
            })
        }
    }

    // on initialisation the data from the Database is fetched and after a timeout used.
    ngOnInit() {
        this.fetchData();
        setTimeout(() => {
            this.initializeData()
        }, 200)
    }

    // fetches Activities, Indicators and References from Database
    fetchData() {
        this.dataService.getActivities().subscribe(activities => {
            this.learningActivitiesOptions = activities;
        });
        this.indicatorOptions$ = this.dataService.getIndicators().pipe(shareReplay());
        this.dataService.getReferences().subscribe(references => {
            this.referenceOptions = references;
            const referenceIds = references.map(reference => reference.referenceNumber);
            for (let i = 1; i <= referenceIds.length + 1; i++) {
                if (!referenceIds.includes(`[${i}]`)) {
                    this.newReferenceNumber = `[${i}]`
                    if (!this.existingReferenceNumber) {
                        this.referenceForm.patchValue({'referenceNumber': this.newReferenceNumber});
                    }
                    break;
                }
            }
        })
    }

    // initializes Form values in case either an indicator or a reference is edited.
    // If no corresponding data is found, the form is initialized accordingly
    private initializeData() {
        if (this.target) {
            if (this.data.indicator) {
                this.indicatorForm.patchValue({
                    indicatorName: this.data.indicator.Title,
                    metrics: this.data.indicator.metrics,
                    summary: this.data.indicator.summary,
                    verified: this.data.indicator.verified
                })
                this.referenceForm.patchValue({
                    referenceNumber: this.data.indicator.referenceNumber,
                })
            } else {
                this.indicatorForm.patchValue({
                    indicatorName: 'No indicator found',
                    metrics: 'No indicator found',
                    summary: 'No indicator found',
                    verified: false
                })
            }
            if (this.data.reference) {
                this.referenceForm.patchValue({
                    referenceText: this.data.reference.referenceText,
                    referenceLink: this.data.reference.link,
                    referenceNumber: this.data.reference.referenceNumber,
                    verified: this.data.reference.status,
                    development: this.data.reference.development
                })
            } else {
                this.referenceForm.patchValue({
                    referenceText: 'Reference has been deleted',
                    referenceLink: 'Reference has been deleted'
                })
            }
        }
    }

    // method called on save button clicked.
    // depending on which Mode(Create/Edit Indicator/Edit Reference) is currently active, the matching Model is built
    // and matching Service call is executed
    addData() {
        const indicatorFormValue = this.indicatorForm.getRawValue();
        const referenceFormValue = this.referenceForm.getRawValue();

        const indicator: indicator = {
            referenceNumber: indicatorFormValue.referenceNumber,
            Title: indicatorFormValue.indicatorName,
            metrics: indicatorFormValue.metrics,
            summary: indicatorFormValue.summary,
            verified: indicatorFormValue.verified
        }
        let referenceLink = referenceFormValue.referenceLink;
        if (referenceLink === '') {
            referenceLink = null;
        }
        const reference: Reference = {
            referenceNumber: referenceFormValue.referenceNumber,
            referenceText: referenceFormValue.referenceText,
            link: referenceLink,
            status: referenceFormValue.verified,
            development: referenceFormValue.development
        }

        this.indicatorForm.markAllAsTouched();
        this.referenceForm.markAllAsTouched();

        switch (this.target) {
            case 'indicator':
                if (!this.indicatorForm.valid || !this.referenceForm.valid) {
                    return
                }

                const removedActivities = this.originallySelectedLearningActivities
                    .map(item => item._id)
                    .filter(id => this.selectedLearningActivities
                        .map(item => item._id).indexOf(id) < 0);
                const addedActivities = this.selectedLearningActivities
                    .map(item => item._id)
                    .filter(id => this.originallySelectedLearningActivities
                        .map(item => item._id).indexOf(id) < 0);

                const editObject: {activitiesDeleted: LearningActivity[], activitiesAdded: LearningActivity[], indicator: indicator} = {
                    activitiesDeleted: removedActivities,
                    activitiesAdded: addedActivities,
                    indicator
                }

                this.dataService.editIndicator(this.indicatorId, editObject).subscribe(() => {
                    if (!this.useExistingReference) {
                        this.dataService.updateReference(this.data.reference._id, reference).subscribe(() => {
                            this.router.navigate(['/']);
                        })
                    } else {
                        this.router.navigate(['/']);
                    }
                })
                break;
            case 'reference':
                if (!this.referenceForm.valid) {
                    return
                }

                this.dataService.updateReference(this.data.reference._id, reference).subscribe(() => {
                    this.router.navigate(['/reference']);
                })
                break;
            default:
                if (!this.referenceForm.valid || !this.indicatorForm.valid) {
                    return
                }

                const dataObject: {activities: LearningActivity[], indicator: indicator, reference: Reference, superAdmin: boolean} = {
                    activities: this.selectedLearningActivities,
                    indicator,
                    reference: this.useExistingReference ? null : reference,
                    superAdmin: this.superAdmin
                }
                this.dataService.addIndicatorAndReference(dataObject).subscribe(() => {
                    if (this.superAdmin) {
                        window.alert(`Indicator ${indicator.Title} has been saved`)
                        this.restForms();
                    } else {
                        this.dialog.open(this.normalUserSaveDialog);
                    }
                })
        }
    }

    restForms() {
        this.indicatorForm.reset();
        this.selectedLearningActivities = [];
        this.setActivityMessages(this.selectedLearningActivities);
        this.referenceForm.reset();
        this.useExistingReference = false;
    }

    navigateToMainPage() {
        this.router.navigate(['/']);
    }

    learningActivityiesSelected() {
        setTimeout(() => {
            this.indicatorForm.patchValue({learningActivities: this.selectedLearningActivities});
            this.setActivityMessages(this.selectedLearningActivities);
        }, 10)
    }

    // method to compute the strings which are needed to show the corresponding Events depending on the chosen Activities
    setActivityMessages(activities: LearningActivity[]) {
        this.affectedEvents.clear();
        if (activities.length === 0) {
            this.showActivityMessages = false;
        } else {
            const messages: string[] = [];
            activities.forEach(activity => {
                this.dataService.getEventsByActivityId(activity._id).subscribe(events => {
                    const eventNames = events.map(event => event.name);
                    eventNames.forEach(name => this.affectedEvents.add(name));
                    let message: string;
                    if (eventNames.length === 1) {
                        message = `The selected learning activity "${activity.name}"
                    lies under the learning event "${eventNames[0]}".`
                    }
                    if (eventNames.length > 1) {
                        const namesWithComma = eventNames.join(', ')
                        message = `The selected learning activity "${activity.name}" lies under
                     the learning events "${namesWithComma}".`
                    }
                    messages.push(message);
                })
            })

            setTimeout(() => {
                this.activityMessages = messages;
                this.showActivityMessages = true;
            }, 100);
        }
    }

    showEvents() {
        return [...this.affectedEvents.values()].join(", ");
    }

    // logs out user => clear currentUser data from LocalStorage
    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }

    // method to switch between using an existing Reference and creating a new one on save.
    // useExitsingReference switches the Reference Input to a Dropdown and disables the other Reference Form fields.
    // Previously entered values are saved to reset them in case the checkbox is clicked again.
    checkboxReferenceClicked() {
        this.useExistingReference = !this.useExistingReference;
        if (!this.useExistingReference) {
            this.referenceForm.get('referenceLink').enable();
            this.referenceForm.get('verified').enable();
            this.referenceForm.get('development').enable();
            this.referenceForm.patchValue({
                referenceText: this.previousReferenceName,
                referenceLink: this.previousReferenceLink,
                referenceNumber: this.existingReferenceNumber ? this.existingReferenceNumber :this.newReferenceNumber,
                verified: this.previousReferenceVerified,
                development: this.previousReferenceDevelopment
            });
        } else {
            this.setPreviousValues()
            this.referenceForm.get('referenceLink').disable();
            this.referenceForm.get('verified').disable();
            this.referenceForm.get('development').disable();
            this.referenceForm.patchValue({
                referenceText: null,
                referenceLink: null,
                referenceNumber: null,
                verified: null,
                development: null
            });
        }
    }

    // method used to compare and differentiate Items in the Activity Dropdown
    compareMethod(item, selected) {
        return item._id === selected._id;
    }

    // method for filling the referenceForm model when choosing an existing Reference from the Dropdown.
    onReferenceChange(reference: Reference) {
        if (reference) {
            this.referenceForm.patchValue(
                {
                    referenceText: reference.referenceText,
                    referenceLink: reference.link,
                    referenceNumber: reference.referenceNumber,
                    verified: reference.status,
                    development: reference.development
                });
        } else {
            this.referenceForm.patchValue(
                {
                    referenceText: null,
                    referenceLink: null,
                    referenceNumber: null,
                    verified: null,
                    development: null
                });
        }
    }

    // method to temporarily save previously entered reference values
    private setPreviousValues() {
        this.previousReferenceName = this.referenceForm.value['referenceText'];
        this.previousReferenceLink = this.referenceForm.value['referenceLink'];
        this.previousReferenceVerified = this.referenceForm.value['verified'];
        this.previousReferenceDevelopment = this.referenceForm.value['development'];
    }

    // returns true if the omitted target is equal to the target of the current Mode.
    readonly(target: string) {
        if (!target) return false;
        return this.target === target;
    }

    showActivityDialoge() {
        this.dialog.open(this.activityDialog);
    }
}
