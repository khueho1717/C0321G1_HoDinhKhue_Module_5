import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';




@NgModule({
  declarations: [
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],

})
export class EmployeeModule { }
