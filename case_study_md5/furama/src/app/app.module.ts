import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { CreateContractDetailComponent } from './contract-detail/create-contract-detail/create-contract-detail.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateCustomerComponent,
    MenuComponent,
    CreateEmployeeComponent,
    CreateServiceComponent,
    CreateContractComponent,
    CreateContractDetailComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    ListServiceComponent,
    ListContractComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
