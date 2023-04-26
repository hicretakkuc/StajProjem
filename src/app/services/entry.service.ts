import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { EntryPg } from '../models/entry-pg';
import{tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private httpClient:HttpClient) { }
  public loading:boolean=true;
  private apiUrl: string="https://localhost:5001/api/entries"


getEntries(page:number,pageSize:number){

  let api=`${this.apiUrl}/${page}/${pageSize}`;
  return this.httpClient.get<EntryPg>(api).pipe(tap(x=>{

this.loading=false;







  }))






}









}
