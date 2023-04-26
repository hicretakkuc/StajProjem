import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './mainpages/home/home.component';
import { LoginComponent } from './mainpages/login/login.component';
import { SignupComponent } from './mainpages/signup/signup.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';


const routes: Routes = [
  {
path:"",
component:MainLayoutComponent,
children:[
  {
path:"",
component:HomeComponent
  },
  {
    path:"sayfa/:page",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"sign up",
    component:SignupComponent
  }
]


  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
