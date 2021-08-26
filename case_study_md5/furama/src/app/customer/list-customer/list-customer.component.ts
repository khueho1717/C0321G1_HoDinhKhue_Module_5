import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../../services/customer.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogsComponent} from '../../layout/dialogs/dialogs.component';

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
      if (result != null){
        console.log(result);
        this.deleteRowData(result);
      }
    });
  }
  deleteRowData(customer) {
    this.customers = this.customers.filter(c => {
      return c.id !== customer.id;
    });
  }

  ngOnInit(): void {
    return this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }

}
