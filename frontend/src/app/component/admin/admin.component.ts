import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  public loginForm: FormGroup;
  username: string;
  password: string;

  currentUrl: string = 'add';
  additionalInfo: any;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],


    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.currentUrl = this.router.getCurrentNavigation().extras.state.url;
      this.additionalInfo = this.router.getCurrentNavigation().extras.state.additionalInfo;
    }
  }

  ngOnInit() {

  }

  submit() {

    this.dataService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        res => {
          this.loginForm.reset();
          this.dataService.loggedIn = true;
          this.router.navigate([this.currentUrl], {state: {additionalInfo: this.additionalInfo}})
        },

        err => alert('User NOT found!')
      )
  }


}
