import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LearningEvent} from "../../_models/learningEvent.model";
import {LearningActivity} from "../../_models/learningActivity.model";
import {indicator} from "../../_models/indicator.model";
import {DisplayComponent} from "../display/display.component";
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

  //NEW Stuff

  similarActivityMessage: any;
  CUserName: any;
  indicatorForm: FormGroup;

  learningEventOptions: LearningEvent[];
  learningActivitiesOptions: LearningActivity[];
  allLearningActivitiesOptions: LearningActivity[];
  indicatorOptions$: Observable<indicator[]>;
  referenceOptions: Reference[];

  useExistingIndicator: boolean = false;
  private previousIndicatorName: string;
  private previousMetrics: string;
  indicatorId: string;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              headerService: HeaderService) {
    headerService.setHeader('add-indicator')

    if (localStorage.getItem('currentUser')) {
      this.CUserName = JSON.parse(localStorage.getItem('currentUser')).username;
    }

    this.indicatorId = route.snapshot.params.id;

    //// form entries///////
    this.indicatorForm = this.fb.group({
      learningEvent: [{value: null, disabled: this.shouldDisable()}, Validators.required],
      learningActivity: [{value: null, disabled: this.shouldDisable()}, Validators.required],
      indicatorName: [null, Validators.required],
      metrics: [null, Validators.required],
      indicatorReference: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.fetchData();
    if (this.indicatorId) {
      this.initializeWithExisitingIndicator()
    }
  }

  fetchData() {
    this.dataService.getEvents().subscribe(events => {
      this.learningEventOptions = events;
    });
    this.dataService.getActivities().subscribe(activities => {
      this.learningActivitiesOptions = activities;
      this.allLearningActivitiesOptions = activities;
    });
    this.indicatorOptions$ = this.dataService.getIndicators().pipe(shareReplay());
    this.dataService.getReferences().subscribe(references => {
      this.referenceOptions = references;
    })
  }

  private initializeWithExisitingIndicator() {
    this.dataService.getPathByIndicatorId(this.indicatorId).subscribe((pathObject: PathObject) => {
      this.indicatorForm.patchValue({
        indicatorName: pathObject.indicator.Title,
        metrics: pathObject.indicator.metrics,
        indicatorReference: pathObject.indicator.referenceNumber,
      })
      setTimeout(() => {
        this.indicatorForm.get('learningEvent').setValue(pathObject.event);
        this.indicatorForm.get('learningActivity').setValue(pathObject.activity);
      }, 100);
    })
  }

  addData() {
    if (!this.indicatorForm.valid){
      return
    }
    const formValue = this.indicatorForm.value;
    const indicator: indicator = {
      referenceNumber: formValue.indicatorReference.referenceNumber,
      Title: formValue.indicatorName,
      metrics: formValue.metrics
    }

    const dataObject: {activity: LearningActivity, indicator: indicator} = {
      activity: formValue.learningActivity,
      indicator
    }
    if (!this.indicatorId) {
      this.dataService.addIndicator(dataObject).subscribe(() => {
        this.router.navigate(['/']);
      })
    } else {

      this.dataService.editIndicator(this.indicatorId, indicator).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }

  learningEventSelected(learningEvent: LearningEvent) {
    if (!this.indicatorId) {
      this.indicatorForm.patchValue({learningActivities: null})
      this.similarActivityMessage = null;
      this.learningActivitiesOptions = learningEvent ? this.filterActivitiesByLearningEvent(learningEvent) : this.allLearningActivitiesOptions;
    }
  }

  private filterActivitiesByLearningEvent(learningEvent: LearningEvent): LearningActivity[] {
    return this.allLearningActivitiesOptions.filter(activity => {
      return learningEvent.activityIds.includes(activity._id);
    });
  }

  learningActivitySelected(learningActivity: LearningActivity) {
    if (!this.indicatorId) {
      const name = learningActivity ? learningActivity.name : null;
      switch (name) {
        case "Group Work":
          this.similarActivityMessage = "The selected learning activity <em>\"Group Work\"</em> " +
            "lies under the learning events <em>\"Create, Practice and Debate\"</em>.<br>Therefore," +
            " the Indicator and Metrics you want to add will also be added automatically under the " +
            "<em>\"Group Work\"</em> activity in the mentioned learning events.";
          break;
        case "Review/Study":
          this.similarActivityMessage = "The selected learning activity <em>\"Review/Study\"</em> " +
            "lies under the learning events <em>\"Receive, Meta-learn or Self-reflect and Debate\"</em>.<br>Therefore," +
            " the Indicator and Metrics you want to add will also be added automatically under the " +
            "<em>\"Review/Study\"</em> activity in the mentioned learning events.";
          break;
        case "Presentation":
          this.similarActivityMessage = "The selected learning activity <em>\"Presentation\"</em> " +
            "lies under the learning events <em>\"Receive, Imitate and Debate\"</em>.<br>Therefore," +
            " the Indicator and Metrics you want to add will also be added automatically under the " +
            "<em>\"Presentation\"</em> activity in the mentioned learning events.";
          break;
        case "Exercise (Training)":
          this.similarActivityMessage = "The selected learning activity <em>\"Exercise (Training)\"</em> " +
            "lies under the learning events <em>\"Imitate, Experiment and Practice\"</em>.<br>Therefore," +
            " the Indicator and Metrics you want to add will also be added automatically under the " +
            "<em>\"Exercise (Training)\"</em> activity in the mentioned learning events.";
          break;
        case "Question (Query/Inquiry)":
          this.similarActivityMessage = "The selected learning activity <em>\"Question (Query/Inquiry)\"</em> " +
            "lies under the learning events <em>\"Practice and Debate\"</em>.<br>Therefore," +
            " the Indicator and Metrics you want to add will also be added automatically under the " +
            "<em>\"Question (Query/Inquiry)\"</em> activity in the mentioned learning events.";
          break;
        case "Survey (Questionnaire)":
          this.similarActivityMessage = "The selected learning activity <em>\"Survey (Questionnaire)\"</em> " +
            "lies under the learning events <em>\"Explore, Practice and Debate\"</em>.<br>Therefore," +
            " the Indicator and Metrics you want to add will also be added automatically under the " +
            "<em>\"Survey (Questionnaire)\"</em> activity in the mentioned learning events.";
          break;
        case "Peer review/Assessment":
          this.similarActivityMessage = "The selected learning activity <em>\"Peer review/Assessment\"</em> " +
            "lies under the learning events <em>\"Practice and Meta-learn or Self-reflect\"</em>.<br>Therefore," +
            " the Indicator and Metrics you want to add will also be added automatically under the " +
            "<em>\"Peer review/Assessment\"</em> activity in the mentioned learning events.";
          break;
        default:
          this.similarActivityMessage = false;
      }
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  checkboxClicked() {
    this.useExistingIndicator = !this.useExistingIndicator;
    if (!this.useExistingIndicator) {
      this.indicatorForm.patchValue({
        'indicatorName': this.previousIndicatorName,
        'indicatorReference': null,
        'metrics': this.previousMetrics
      });
    } else {
      this.previousIndicatorName = this.indicatorForm.value['indicatorName'];
      this.previousMetrics = this.indicatorForm.value['metrics'];
      this.indicatorForm.patchValue({
        'indicatorName': null,
        'indicatorReference': null,
        'metrics': null
      });
    }
  }

  indicatorSelected(indicator: indicator) {
    if (indicator) {
      this.indicatorForm.patchValue(
        {
          'indicatorName': indicator.Title,
          'indicatorReference': this.retrieveReferenceByNumber(indicator.referenceNumber),
          'metrics': indicator.metrics
        });
    } else {
      this.indicatorForm.patchValue(
        {
          'indicatorName': null,
          'indicatorReference': null,
          'metrics': null
        });
    }
  }

  private retrieveReferenceByNumber(refNumber: string) {
    return this.referenceOptions.find(reference => reference.referenceNumber === refNumber);
  }

  shouldDisable() {
    return this.indicatorId;
  }

  compareMethod(item, selected) {
    return item._id === selected._id;
  }
}
