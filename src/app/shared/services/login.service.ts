import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private router: Router
    ) { }

    secretKey = 'kitties';

    login(username: string, password: string): Observable<boolean> {
        const user = JSON.parse(localStorage.getItem('users')).find(x => x.username === username);

        if (user && password === CryptoJS.AES.decrypt(user.password, this.secretKey).toString(CryptoJS.enc.Utf8)) {
            localStorage.setItem('token', CryptoJS.AES.encrypt('token', this.secretKey).toString());
            return of(true);
        }
        return of(false);
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
