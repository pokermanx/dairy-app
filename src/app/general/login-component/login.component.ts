import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errorMessage: string;

    constructor(
        private loginServie: LoginService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required
            ])
        });

        this.loginForm.valueChanges.subscribe(() => this.errorMessage = null)
    }

    onLogin() {
        this.loginServie.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
            .subscribe((res: boolean) => {
                if (res) {
                    this.router.navigateByUrl('/list');
                } else {
                    this.errorMessage = 'Username or password is incorect';
                }
            });
    }

    keyDownFunction(event) {
        if (event.keyCode === 13) {
            this.onLogin();
        }
    }
}
