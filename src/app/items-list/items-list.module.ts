import { NgModule } from '@angular/core';
import { ItemsListComponent } from './pages/items-list.component';
import { ItemsListRoutingModule } from './items-list-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './pages/comments/comments.component';

@NgModule({
    declarations: [
        ItemsListComponent,
        CommentsComponent
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
