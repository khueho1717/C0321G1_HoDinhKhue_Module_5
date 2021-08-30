import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {MenuComponent} from './layout/menu/menu.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {CreateServiceComponent} from './service/create-service/create-service.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {CreateContractDetailComponent} from './contract-detail/create-contract-detail/create-contract-detail.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CustomerRoutingModule} from './customer/customer-routing.module';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogsComponent } from './layout/dialogs/dialogs.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

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
    ListContractComponent,
    EditCustomerComponent,
    DialogsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    RouterModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  entryComponents: [DialogsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
