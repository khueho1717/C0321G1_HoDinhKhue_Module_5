import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';

const API = "http://localhost:3000/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API);
  }

  saveTodo(todo: any): Observable<Todo> {
    return this.http.post<Todo>(API , todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(API + "/" + id );
  }

  updateTodo(id: number, product: Todo): Observable<Todo> {
    return this.http.put<Todo>(API + "/" + id , product);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(API + "/" + id );
  }
}
