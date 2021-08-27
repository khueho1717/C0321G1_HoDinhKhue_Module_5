import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categoryList');
  }

  saveCategory({category}: { category: any }): Observable<Category> {
    return this.http.post<Category>(API_URL + '/categoryList', category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/categoryList/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}/categoryList/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${API_URL}/categoryList/${id}`);
  }
}
