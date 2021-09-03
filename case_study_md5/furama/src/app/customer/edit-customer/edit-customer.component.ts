import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../services/customer-type.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private snackBar: MatSnackBar) {
    // this.customerService

  }

  ngOnInit(): void {
    this.getData();
    this.initFormEdit();
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(this.id).subscribe(data => {
      console.log(data);
      this.customerForm.setValue(data);
    });

  }

  updateCustomer(id: number) {
    this.customerService.updateProduct(id, this.customerForm.value).subscribe(value => {
      this.router.navigateByUrl('customer');
      this.snackBar.open('update complete ' + value.nameCustomer, 'close');
    });
  }

  getData() {
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    });
  }

  initFormEdit() {

    this.customerForm = new FormGroup({
      id: new FormControl(''),
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
  }

  compareTech(t1: CustomerType, t2: CustomerType): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

}
