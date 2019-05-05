import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        NavbarComponent
    ]
})
export class UiModule { }
