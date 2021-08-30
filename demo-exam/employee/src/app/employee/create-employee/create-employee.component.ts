import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {EducationDegree} from "../../model/education-degree";
import {Position} from "../../model/position";
import {Division} from "../../model/division";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  educationDegrees: EducationDegree[] = [];
  positions: Position[] = [];
  divisions: Division[] = [];

  employeeForm: FormGroup = new FormGroup({
    employeeCode: new FormControl('',[Validators.required, Validators.pattern('^NV-\\d{4}$')]),
    employeeName: new FormControl('',[Validators.required]),
    employeeBirthday: new FormControl('',[Validators.required, this.checkAge]),
    employeeGender: new FormControl('',[Validators.required]),
    employeeIdCard: new FormControl('',[Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
    employeePhone: new FormControl('',[Validators.required, Validators.pattern(/^\+84 \d{9,10}$/)]),
    employeeEmail: new FormControl('',[Validators.required, Validators.email]),
    employeeAddress: new FormControl('',[Validators.required]),
    educationDegree: new FormControl('',[Validators.required]),
    position: new FormControl('',[Validators.required]),
    division: new FormControl('',[Validators.required]),
    employeeSalary: new FormControl('',[Validators.required, Validators.min(0)]),
  })

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.employeeService.getAllDegree().subscribe(value => {
      this.educationDegrees = value;
    });
    this.employeeService.getAllDivision().subscribe(value => {
      this.divisions = value;
    });
    this.employeeService.getAllPositions().subscribe(value => {
      this.positions = value;
    });
  }

  submit() {
    this.employeeService.saveEmployee(this.employeeForm.value).subscribe(value => {
      console.log(value);
      this.router.navigateByUrl('employee/list');
      this._snackBar.open('create complete ' + value.employeeName , 'close');
    });
  }

  checkAge(employeeBirthday: AbstractControl):any{
    const birthday = employeeBirthday.value;
    const yearBirthday = Number(birthday.substr(0,4));
    const curentYears = new Date().getFullYear();
    return curentYears - yearBirthday >= 18 ? null : {checkAge : true};
  }

  // checkDateFuture(employeeBirthday: AbstractControl):any{
  //   const datepipe: DatePipe = new DatePipe('en-US')
  //
  //   const formattedDate = datepipe.transform( employeeBirthday , 'DD-MMM-YYYY HH:mm:ss');
  //
  //   var time = new Date().getFullYear() - new Date(formattedDate).getFullYear();
  //
  //   return time >=0 ? null : {checkDate: true};
  //
  // }

  //  isFutureDate(date: AbstractControl): any{
  //   var today = new Date().getTime();
  //   // @ts-ignore
  //    const  idate = date.split("/");
  //
  //   idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
  //   return (today - idate) < 0 ;
  // }

}
