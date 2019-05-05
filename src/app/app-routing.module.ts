import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      {
        path: 'list',
        loadChildren: '../app/items-list/items-list.module#ItemsListModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
