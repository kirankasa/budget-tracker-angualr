import { Injectable } from '@angular/core';
import {Category} from "./category";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8080/transactions/categories")
  }

  addCategory (category: String): Observable<Category> {
    console.log(category);
    return this.http.post<Category>("http://localhost:8080/transactions/categories",new Category(null, category))
  }
}
