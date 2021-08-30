import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    AppComponent,
    DialogBodyComponent,
    DialogDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  entryComponents: [DialogBodyComponent, DialogDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
