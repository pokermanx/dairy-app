import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        NgbCollapseModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class UiModule { }
