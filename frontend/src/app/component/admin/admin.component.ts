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
    register = false;

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
        if (!this.register) {
            this.dataService.login(this.loginForm.value.username, this.loginForm.value.password)
                .subscribe(
                    res => {
                        this.loginForm.reset();
                        this.dataService.loggedIn = true;
                        this.router.navigate([this.currentUrl], {state: {additionalInfo: this.additionalInfo}})
                    },

                    err => alert('User NOT found!')
                )
        } else {
            this.dataService.register(this.loginForm.value).subscribe(added => {
                    if (added) {
                        window.alert('User had been registered. You will now be directed to the login page');
                        this.register = false;
                        this.loginForm.reset();
                    } else {
                        window.alert(`User could not be registered. User with username ${this.loginForm.value.username} already exists`);
                        this.loginForm.reset();
                    }
                }
            )
        }
    }


    onRegister() {
        this.register = !this.register;
    }

    buttonText() {
        return this.register ? 'Sign up' : 'Login'
    }
}
