import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from "@angular/router"
enum MainPage{
  home=1,
  signup=2,
  login=3,


  }

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})


export class MainNavComponent implements OnInit {

  pageActive!:MainPage;

  constructor(private router:Router) {
this.router.events.subscribe(x=>{


if(x instanceof NavigationEnd)
{
if(x.url.indexOf("home")>0)
{
  this.pageActive=MainPage.home;
}
else if(x.url.indexOf("sign up")>0)
{
  this.pageActive=MainPage.signup;
}
else if(x.url.indexOf("login")>0)
{
  this.pageActive=MainPage.login;
}
else
{
  this.pageActive=MainPage.home;
}

}


})






  }

  ngOnInit(): void {
  }

}
