import {Component, OnInit} from '@angular/core';
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

@Component({
    selector: 'app-add-data',
    templateUrl: './add-data.component.html',
    styleUrls: ['./add-data.component.css']
})


export class AddDataComponent implements OnInit {

    data: PathObject;
    private target: string;

    //NEW Stuff

    similarActivityMessage: any;
    CUserName: any;
    indicatorForm: FormGroup;
    referenceForm: FormGroup;

    learningActivitiesOptions: LearningActivity[];
    indicatorOptions$: Observable<indicator[]>;
    referenceOptions: Reference[];

    indicatorId: string;
    useExistingReference: boolean = false;
    private previousReferenceName: string;
    private previousReferenceLink: string;
    private newReferenceNumber: string;
    private existingReferenceNumber: string;

    verifiedOptions: string[] = ['verified', 'not verified', 'not mentioned'];
    developmentOptions: string[] = ['developed', 'proposed', 'not mentioned'];

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
                headerService: HeaderService) {
        headerService.setHeader('add-indicator')

        if (localStorage.getItem('currentUser')) {
            this.CUserName = JSON.parse(localStorage.getItem('currentUser')).username;
        }

        this.target = this.route.snapshot.data.target;
        this.data = this.route.snapshot.data.data;
        if (this.data.reference) {
            this.existingReferenceNumber = this.data.reference.referenceNumber;
        }
        if (this.data.indicator) {
            this.indicatorId = this.data.indicator._id;
            this.existingReferenceNumber = this.data.indicator.referenceNumber;
        }

        //// form entries///////
        this.indicatorForm = this.fb.group({
            learningActivity: [{value: null, disabled: this.target}, Validators.required],
            indicatorName: [{value: null, disabled: this.readonly('reference')}, Validators.required],
            metrics: [{value: null, disabled: this.readonly('reference')}, Validators.required],
            referenceNumber: [{value: null, disabled: true}, Validators.required]
        });

        this.referenceForm = this.fb.group({
            referenceText: [{value: null, disabled: this.readonly('indicator')}, Validators.required],
            referenceLink: [{value: null, disabled: this.readonly('indicator')}, Validators.required],
            referenceNumber: [{value: null, disabled: true}, Validators.required],
            verified: [{value: null, disabled: this.readonly('indicator')}],
            development: [{value: null, disabled: this.readonly('indicator')}],
        });

        this.referenceForm.controls['referenceNumber'].valueChanges.subscribe(value => this.indicatorForm.controls['referenceNumber'].setValue(value));
    }

    ngOnInit() {
        this.fetchData();
        setTimeout(() => {
            this.initializeData()
        }, 200)
    }

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

    private initializeData() {
        if (this.target) {
            if (this.data.indicator) {
                this.indicatorForm.patchValue({
                    indicatorName: this.data.indicator.Title,
                    metrics: this.data.indicator.metrics,
                })
                this.referenceForm.patchValue({
                    referenceNumber: this.data.indicator.referenceNumber,
                })
                this.indicatorForm.get('learningActivity').setValue(this.data.activity);
            } else {
                this.indicatorForm.patchValue({
                    indicatorName: 'No indicator found',
                    metrics: 'No indicator found',
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

    addData() {
        const indicatorFormValue = this.indicatorForm.getRawValue();
        const referenceFormValue = this.referenceForm.getRawValue();

        const indicator: indicator = {
            referenceNumber: indicatorFormValue.referenceNumber,
            Title: indicatorFormValue.indicatorName,
            metrics: indicatorFormValue.metrics
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
                if (!this.indicatorForm.valid) {
                    return
                }
                this.dataService.editIndicator(this.indicatorId, indicator).subscribe(() => {
                    this.router.navigate(['/']);
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

                const dataObject: { activity: LearningActivity, indicator: indicator, reference: Reference } = {
                    activity: indicatorFormValue.learningActivity,
                    indicator,
                    reference: this.useExistingReference ? null : reference
                }
                this.dataService.addIndicatorAndReference(dataObject).subscribe(() => {
                    this.router.navigate(['/']);
                })
        }
    }

    learningActivitySelected(learningActivity: LearningActivity) {
        if (learningActivity) {
            this.dataService.getEventsByActivityId(learningActivity._id).subscribe(events => {
                const eventNames = events.map(event => event.name);
                if (eventNames.length === 1) {
                    this.similarActivityMessage = `The selected learning activity "${learningActivity.name}"
                    lies under the learning event "${eventNames[0]}".`
                }
                if (eventNames.length > 1) {
                    const namesWithComma = eventNames.join(', ')
                    this.similarActivityMessage = `The selected learning activity "${learningActivity.name}" lies under
                     the learning events "${namesWithComma}". Therefore, the Indicator and Metrics you want to add will
                      be added automatically under all of the mentioned learning events.`
                }
            })
        } else {
            this.similarActivityMessage = null;
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }

    checkboxReferenceClicked() {
        this.useExistingReference = !this.useExistingReference;
        if (!this.useExistingReference) {
            this.referenceForm.get('referenceLink').enable();
            this.referenceForm.get('verified').enable();
            this.referenceForm.get('development').enable();
            this.referenceForm.patchValue({
                referenceText: this.previousReferenceName,
                referenceLink: this.previousReferenceLink,
                referenceNumber: this.newReferenceNumber,
                verified: null,
                development: null
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

    compareMethod(item, selected) {
        return item._id === selected._id;
    }

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

    private setPreviousValues() {
        this.previousReferenceName = this.referenceForm.value['referenceText'];
        this.previousReferenceLink = this.referenceForm.value['referenceLink'];
    }

    readonly(target: string) {
        if (!target) return false;
        return this.target === target;
    }
}
