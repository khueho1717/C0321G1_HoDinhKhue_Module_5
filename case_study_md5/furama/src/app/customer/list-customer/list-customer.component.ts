import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  public customers: Customer[] = [
    {
      id: 1, customerCode: 'KH-1234', nameCustomer: 'Ho Dinh Khue', birthDate: '1997-12-13',gender: 1,idCart: '21233435', numberPhone: '09063242312', email: 'khue@gmail.com',
      customerType: 'Gold', address: 'Quang Nam'
    },
    {
      id: 2, customerCode: 'KH-1434', nameCustomer: 'Ho Dinh Lam', birthDate: '1990-10-13',gender: 1,idCart: '21224435', numberPhone: '0906364212', email: 'lam@gmail.com',
      customerType: 'Gold', address: 'Quang Nam'
    },
    {
      id: 3, customerCode: 'KH-1434', nameCustomer: 'Tran Kim Chi', birthDate: '1990-10-13',gender: 2,idCart: '21224435', numberPhone: '0906364212', email: 'lam@gmail.com',
      customerType: 'Gold', address: 'Quang Nam'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
