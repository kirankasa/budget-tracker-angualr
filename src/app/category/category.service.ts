import {Injectable} from '@angular/core';
import {Category} from "./category";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  RETRIEVE_CATEGORIES_URL = environment.apiUrl + "transactions/categories";
  ADD_CATEGORY_URL = environment.apiUrl + "transactions/categories";

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.RETRIEVE_CATEGORIES_URL)
  }

  addCategory(category: string): Observable<Category> {
    let newCategory = new Category();
    newCategory.category = category;
    return this.http.post<Category>(this.ADD_CATEGORY_URL, newCategory)
  }
}
