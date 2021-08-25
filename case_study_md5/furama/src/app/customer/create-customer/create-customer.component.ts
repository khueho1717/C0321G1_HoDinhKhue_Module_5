import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../customer';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
    nameCustomer: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
    numberPhone: new FormControl('', [Validators.required, Validators.pattern(/^\+84 \d{9,10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const customer: Customer = this.customerForm.value;
    customer.id = Math.floor(Math.random() * 1000);
    console.log(customer);
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
  }
}
