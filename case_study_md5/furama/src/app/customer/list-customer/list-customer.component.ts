import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../../services/customer.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogsComponent} from '../../layout/dialogs/dialogs.component';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  public customers: Customer[] = [];
  p: number = 1;
  filter: any;

  constructor(private customerService: CustomerService,
              private matDialog: MatDialog) {
  }

  openDialog(customer: Customer) {
    const dialogRef = this.matDialog.open(DialogsComponent, {
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.deleteRowData(result);
      }
    });
  }

  deleteRowData(customer) {
    this.customerService.deleteProduct(customer.id).subscribe(() => {
        this.getAll();
      }
    );
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      // console.log(this.customers);
    });
  }

}
