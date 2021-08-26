import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Customer} from '../../customer/customer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Customer,
              public dialogRef: MatDialogRef<DialogsComponent>) {
  }

  ngOnInit(): void {
  }


  closeForm() {
    this.dialogRef.close();
  }

  deleteCustomer(customer: Customer) {
    this.dialogRef.close(customer);
  }

  }
