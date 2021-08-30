import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../../services/customer.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogsComponent} from '../../layout/dialogs/dialogs.component';
import {Route, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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
              private matDialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  openDialog(customer: Customer) {
    const dialogRef = this.matDialog.open(DialogsComponent, {
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.deleteRowData(result);
        this.snackBar.open('delete complete ' + result.nameCustomer , 'close');
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
