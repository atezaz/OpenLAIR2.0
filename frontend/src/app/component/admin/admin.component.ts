import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from "../../_models";

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

    // depending on submitting or signing in, calls the corresponding service method and logs-in/creates the user
    submit() {
        if (!this.register) {
            this.dataService.login(this.loginForm.value.username, window.btoa(this.loginForm.value.password))
                .subscribe(
                    res => {
                        this.loginForm.reset();
                        this.dataService.loggedIn = true;
                        this.router.navigate([this.currentUrl], {state: {additionalInfo: this.additionalInfo}})
                    },

                    err => alert('User NOT found!')
                )
        } else {
            const userData: User = {
                username: this.loginForm.value.username,
                password: window.btoa(this.loginForm.value.password)
            }
            this.dataService.register(userData).subscribe(added => {
                    if (added) {
                        window.alert('User has been registered. You will now be directed to the login page');
                        this.register = false;
                        this.loginForm.reset();
                    } else {
                        window.alert(`User could not be registered. Username already exists`);
                    }
                }
            )
        }
    }

    // switches the local register variable
    onRegister() {
        this.register = !this.register;
    }

    // computes which Text to show in the Button
    buttonText() {
        return this.register ? 'Sign up' : 'Login'
    }
}
