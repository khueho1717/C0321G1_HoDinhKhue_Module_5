import { Component, OnInit } from '@angular/core';
import {DateUtilService} from "../date-util.service";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  output = '';

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange({value}: { value: any }) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
