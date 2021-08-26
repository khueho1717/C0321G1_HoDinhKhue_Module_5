import { Component, OnInit } from '@angular/core';
import {IWord} from "../iword";
import {DictionaryServiceService} from "../dictionary-service.service";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {

  words: IWord[] = [];

  constructor(private dictionaryServiceService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.words = this.dictionaryServiceService.words;
  }

}
