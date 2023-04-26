import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Category} from "../models/category"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string="https://localhost:5001/api/categories";
  constructor(private htppCleint:HttpClient) { }

public getCategories(){
return this.htppCleint.get<Category[]>(this.apiUrl);


}
public getCategorybyId(id:number)
{
  let url =`${this.apiUrl}/${id}`;
  return this.htppCleint.get<Category>(url);
}


}
