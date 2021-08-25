import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Customer} from '../../customer/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(),
    employeeName: new FormControl('', [Validators.required]),
    employeeBirthday: new FormControl('', [Validators.required]),
    employeeIdCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
    employeePhone: new FormControl('', [Validators.required, Validators.pattern(/^\+84 \d{9,10}$/)]),
    employeeEmail: new FormControl('', [Validators.required, Validators.email]),
    employeeAddress: new FormControl('', [Validators.required]),
    educationDegree: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
    employeeSalary: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const employee: Employee = this.employeeForm.value;
    employee.employeeId = Math.floor(Math.random() * 1000);
    console.log(employee);
    this.employeeService.saveEmployee(employee);
    this.employeeForm.reset();
  }

}
