import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/entry';
import {Router,ActivatedRoute} from "@angular/router";
import { User } from "src/app/models/user"  //sonradan


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  @Input() totalCount!: number;
  @Input() entries!: Entry[];
  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() kullanıcı!:User;   //sonradan ekledim


  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {}

  pageChanged(event: number) {

    this.page=event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);


  }





}
