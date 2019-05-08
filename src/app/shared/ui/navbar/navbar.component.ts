import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    isCollapsed = false;

    constructor(
        private loginService: LoginService
    ) {}

    onLogout() {
        this.loginService.logout();
    }
}
