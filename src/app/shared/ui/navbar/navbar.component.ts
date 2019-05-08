import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

    isCollapsed = false;

    isSmall = false;

    constructor(
        private loginService: LoginService
    ) { }

    ngOnInit() {
        if (window.innerWidth < 800) {
            this.isCollapsed = true;
            this.isSmall = true;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 800) {
            this.isSmall = true;
            this.isCollapsed = true;
        } else {
            this.isSmall = false;
            this.isCollapsed = false;
        }
    }

    onLogout() {
        this.loginService.logout();
    }
}
