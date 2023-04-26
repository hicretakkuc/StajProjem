import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public constructor(private titleService: Title) { }
  public setTitle (newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.setTitle('Sign Up');
  }

}
