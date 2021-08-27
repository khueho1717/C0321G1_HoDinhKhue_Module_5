import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

const  API = 'http://localhost:3000/customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {


  constructor(private http: HttpClient) { }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API);
  }
}
