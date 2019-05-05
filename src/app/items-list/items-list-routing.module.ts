import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './pages/items-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: ItemsListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsListRoutingModule { }
