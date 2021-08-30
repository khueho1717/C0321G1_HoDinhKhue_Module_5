import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../customer';
import {CustomerTypeService} from '../../services/customer-type.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerType: CustomerType[] = [];
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

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe(date => {
      this.customerType = date;
    });
  }

  submit() {
    this.customerService.saveCustomer(this.customerForm.value).subscribe(value => {
      console.log(value);
      this.router.navigateByUrl('product');
      this.snackBar.open('create complete ' + value.nameCustomer , 'close');
    });
  }
}
