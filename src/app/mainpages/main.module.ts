import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import{HttpClientModule} from "@angular/common/http";
import{AppRoutingModule} from "../app-routing.module";
import{ComponentsModule} from "../components/components.module";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { MainNavComponent } from '../nav/main-nav/main-nav.component';



@NgModule({
  declarations: [MainNavComponent,MainLayoutComponent,HomeComponent,SignupComponent,LoginComponent],
  imports: [
    CommonModule,BrowserModule,HttpClientModule,AppRoutingModule,ComponentsModule
  ]
})
export class MainModule { }
