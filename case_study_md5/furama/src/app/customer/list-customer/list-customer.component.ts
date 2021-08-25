import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  public customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    return this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }

}
