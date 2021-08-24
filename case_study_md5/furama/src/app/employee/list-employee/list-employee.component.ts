import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employees: Employee[] = [
    {
      employeeId: 1,
      employeeName: 'Nguyen Van Son',
      employeeBirthday: '2000-04-05',
      employeeIdCard: '1232343234',
      employeePhone: '0905342343',
      employeeEmail: 'vanson@gmail.com',
      employeeAddress: 'Da Nang',
      educationDegree: 'Cao Dang',
      position: 'chuyen vien',
      division: 'hanh chinh',
      employeeSalary: 1000
    },
    {
      employeeId: 2,
      employeeName: 'Nguyen Hue',
      employeeBirthday: '1997-11-05',
      employeeIdCard: '1245643234',
      employeePhone: '0905343245',
      employeeEmail: 'hue@gmail.com',
      employeeAddress: 'Quang Nam',
      educationDegree: 'Dai Hoc',
      position: 'quan ly',
      division: 'phuc vu',
      employeeSalary: 900
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
