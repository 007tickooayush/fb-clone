/* tslint:disable:whitespace no-trailing-whitespace */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeGuard} from './guards/home.guard';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {
      path:'', loadChildren:() => (import('./components/home/home.module').then(m => m.HomeModule)), // lazy loading
    canActivate:[HomeGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
