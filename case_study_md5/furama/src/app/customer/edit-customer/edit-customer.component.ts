import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    const customer = this.customerService.findById(this.id);
    this.customerForm = new FormGroup({
      id: new FormControl(customer.id),
      customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      nameCustomer: new FormControl(customer.nameCustomer, [Validators.required]),
      birthDate: new FormControl(customer.birthDate, [Validators.required]),
      gender: new FormControl(customer.gender, [Validators.required]),
      idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
      numberPhone: new FormControl(customer.numberPhone, [Validators.required, Validators.pattern(/^\+84 \d{9,10}$/)]),
      email: new FormControl(customer.email, [Validators.required, Validators.email]),
      customerType: new FormControl(customer.customerType, [Validators.required]),
      address: new FormControl(customer.email, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  updateCustomer(id: number) {
    const customer: Customer = this.customerForm.value;
    console.log(customer);
    this.customerService.updateProduct(id, customer);
    alert('Cập nhật thành công');
  }

}
