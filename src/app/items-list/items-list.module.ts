import { NgModule } from '@angular/core';
import { ItemsListComponent } from './pages/items-list.component';
import { ItemsListRoutingModule } from './items-list-routing.module';

@NgModule({
    declarations: [
        ItemsListComponent
    ],
    imports: [
        ItemsListRoutingModule
    ],
    exports: []
})
export class ItemsListModule { }
