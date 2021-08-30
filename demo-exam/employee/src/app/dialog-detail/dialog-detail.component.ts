import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../model/employee";

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Employee,
              public dialogRef: MatDialogRef<DialogDetailComponent>) { }

  ngOnInit(): void {
  }

  closeForm() {
    this.dialogRef.close();
  }

}
