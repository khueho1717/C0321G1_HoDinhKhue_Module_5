import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Employee} from "../model/employee";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Employee,
              public dialogRef: MatDialogRef<DialogBodyComponent>) { }

  ngOnInit(): void {
  }

  closeForm() {
    this.dialogRef.close();
  }

  deleteEmployee(employee: Employee) {
    this.dialogRef.close(employee);
  }

}
