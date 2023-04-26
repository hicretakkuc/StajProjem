import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string="https://localhost:5001/api/kullan%C4%B1c%C4%B1"
  constructor(private httpClient:HttpClient) { }


public getKullanıcı(){
return this.httpClient.get<User[]>(this.apiUrl);


}

public getKullanıcıbyId(id:number)
{
  let url =`${this.apiUrl}/${id}`;
  return this.httpClient.get<User>(url);
}
















}
