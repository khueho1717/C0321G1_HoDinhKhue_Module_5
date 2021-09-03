import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {Ng2OrderModule} from "ng2-order-pipe";
import {DialogBodyComponent} from "../dialog-body/dialog-body.component";
import {DialogDetailComponent} from "../dialog-detail/dialog-detail.component";
import {EmployeeService} from "../service/employee.service";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DialogBodyComponent,
    DialogDetailComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogBodyComponent, DialogDetailComponent],

})
export class EmployeeModule {
}
