import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    return this.getAll();
  }

  getAll() {
    this.employees = this.employeeService.getAll();
  }

}
