import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DictionayPageComponent } from './dictionay-page/dictionay-page.component';
import { DictionaryDetaiComponent } from './dictionary-detai/dictionary-detai.component';
import {DetailWordRoutingModule} from "./detail-word-routing.module";
import {RouterTestingModule} from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    DictionayPageComponent,
    DictionaryDetaiComponent
  ],
  imports: [
    BrowserModule,
    DetailWordRoutingModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
