import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Division} from "../model/division";
import {Position} from "../model/position";
import {EducationDegree} from "../model/education-degree";

const API_POSITION = "http://localhost:3000/position";
const API_DIVISION = "http://localhost:3000/division";
const API_DEGREE = "http://localhost:3000/educationDegree";
const API_EMPLOYEE = "http://localhost:3000/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_EMPLOYEE);
  }

  getAllDivision(): Observable<Division[]> {
    return this.http.get<Division[]>(API_DIVISION);
  }

  getAllPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(API_POSITION);
  }

  getAllDegree(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>(API_DEGREE);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(API_EMPLOYEE, employee);
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(API_EMPLOYEE + '/' + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(API_EMPLOYEE + '/' + id, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(API_EMPLOYEE + '/' + id);
  }

  searchByName(search: any): Observable<Employee[]>{
    return this.http.get<Employee[]>(API_EMPLOYEE + '?employeeName_like=' + search );
  }

  // GET /comments?author.name=typicode
}
