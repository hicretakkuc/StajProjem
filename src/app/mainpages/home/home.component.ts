import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/entry';
import { EntryService } from 'src/app/services/entry.service';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page:number=1;  //default değerim
  entries!:Entry[];
  totalCount!:number;
  pageSize:number=10; //sayfamda 10 entry olsun




  public constructor(private entryService:EntryService,private router:Router,private route:ActivatedRoute) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{   //URL'in değişimini takip etmek için değiştiğinde asagıdakı komutlar çalışıyo
      if(params.get("page")){
        this.page=Number(params.get("page"));
      }
      this.entries=[] //2.sayfaya gecildiğinde ilk 10 entrynin silinmesi için bos nesne
      this.totalCount=0;

      this.entryService.getEntries(this.page,this.pageSize).subscribe(data=>{
        console.log(data);   //datayı consoleda görebilmek için
        this.entries=data.entries;
        this.totalCount=data.totalCount;
      })



    })

  }

}
