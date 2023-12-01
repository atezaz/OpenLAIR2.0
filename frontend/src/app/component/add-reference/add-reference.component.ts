import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LearningEvent} from "../../_models/learningEvent.model";
import {LearningActivity} from "../../_models/learningActivity.model";
import {indicator} from "../../_models/indicator.model";
import {DisplayComponent} from "../display/display.component";
import {Reference} from "../../_models/reference.model";
import {HeaderService} from "../header/header.service";

@Component({
  selector: 'app-add-reference',
  templateUrl: './add-reference.component.html',
  styleUrls: ['./add-reference.component.css']
})


export class AddReferenceComponent implements OnInit {

  CUserName: any;
  referenceId: any;
  editableReference: Reference;
  referenceForm: FormGroup;
  referenceNumber: string;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder,
              headerService: HeaderService, private route: ActivatedRoute) {
    headerService.setHeader('add-reference')

    //// form entries///////
    this.referenceForm = this.fb.group({
      referenceText: [null, Validators.required],
      referenceLink: [null],
      referenceNumber: [{value: null, disabled: true}, Validators.required]
    });

    this.referenceId = this.route.snapshot.params.id;
    if (this.referenceId) {
      this.dataService.getReferenceById(this.referenceId).subscribe((reference: Reference) => {
        this.editableReference = reference;
        this.referenceNumber = reference.referenceNumber
        this.referenceForm.patchValue({
          referenceText: reference.referenceText,
          referenceLink: reference.link,
          referenceNumber: reference.referenceNumber
        })
      })
    }

    if (localStorage.getItem('currentUser')) {
      this.CUserName = JSON.parse(localStorage.getItem('currentUser')).username;
    }
  }

  ngOnInit() {
    if (!this.referenceId) {
      this.fetchReferenceNumber();
    }
  }

  addReference() {
    if (!this.referenceForm.valid) {
      return
    }
    const referenceText = this.referenceForm.value.referenceText;
    let referenceLink = this.referenceForm.value.referenceLink;
    if (referenceLink === '') {
      referenceLink = null;
    }

    const reference: Reference = {
      referenceNumber: this.referenceNumber,
      referenceText: referenceText,
      link: referenceLink
    }

    if (this.referenceId) {
      this.dataService.updateReference(this.referenceId, reference).subscribe(() => {
        this.router.navigate(['/reference']);
      })
    } else {
      this.dataService.addReference(reference).subscribe(() => {
        this.router.navigate(['/reference']);
      })
    }
  }


  fetchReferenceNumber() {
    this.dataService.getReferences().subscribe(references => {
      const referenceIds = references.map(reference => reference.referenceNumber);
      for (let i = 1; i <= referenceIds.length + 1; i++) {
        if (!referenceIds.includes(`[${i}]`)) {
          this.referenceNumber = `[${i}]`
          this.referenceForm.patchValue({'referenceNumber': this.referenceNumber});
          break;
        }
      }
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
