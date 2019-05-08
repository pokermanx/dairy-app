import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { UnauthorizedGuard } from './shared/guards/unauthorized.guard';
import { LoginComponent } from './general/login-component/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UnauthorizedGuard], children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: NavbarComponent,
    children: [
      {
        path: 'list',
        loadChildren: '../app/items-list/items-list.module#ItemsListModule'
      }
    ]
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
