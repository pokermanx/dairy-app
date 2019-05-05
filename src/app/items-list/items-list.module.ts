import { NgModule } from '@angular/core';
import { ItemsListComponent } from './pages/items-list.component';
import { ItemsListRoutingModule } from './items-list-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ItemsListComponent
    ],
    imports: [
        ItemsListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: []
})
export class ItemsListModule { }
