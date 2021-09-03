import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {Employee} from "../../model/employee";
import {MatDialog} from "@angular/material/dialog";
import {DialogBodyComponent} from "../../dialog-body/dialog-body.component";
import {DialogDetailComponent} from "../../dialog-detail/dialog-detail.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employees: Employee[] = [];
  p: number = 1;
  filter: any;


  constructor(private employeeService: EmployeeService,
              private matDialog: MatDialog,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAll();
  }

  openDialog(employee: Employee) {
    const dialogRef = this.matDialog.open(DialogBodyComponent, {
      data: employee
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.deleteRowData(result);
        this._snackBar.open('delete complete ' + result.employeeName, 'close');
      }
    });
  }

  openDialogDetail(employee: Employee) {
    const dialogRef = this.matDialog.open(DialogDetailComponent, {
      data: employee
    });

    dialogRef.afterClosed().subscribe();
  }

  deleteRowData(employee: { id: number; }) {
    this.employeeService.deleteEmployee(employee.id).subscribe(() => {
        this.getAll();
      }
    );
  }

  getAll() {
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  searchByName(name: any){
    this.employeeService.searchByName(name).subscribe(value => {
      this.employees = value;
      this.p = 1;
    })
  }

  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  // @ts-ignore
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
