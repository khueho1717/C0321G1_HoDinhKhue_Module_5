import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DictionaryDetaiComponent} from "./dictionary-detai/dictionary-detai.component";
import {DictionayPageComponent} from "./dictionay-page/dictionay-page.component";

const route: Routes = [
  {path: 'word-detail/:word', component: DictionaryDetaiComponent},
  {path: '', component: DictionayPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class DetailWordRoutingModule { }
