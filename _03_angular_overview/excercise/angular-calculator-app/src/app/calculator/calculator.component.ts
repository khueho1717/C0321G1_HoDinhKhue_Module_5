import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  first:number =0;
  second: number=0;
  result:number =0;


  changFirst(num: number) {
    this.first=Number(num)
  }

  changSecond(num: number) {
    this.second=Number(num)
  }

  calculationResults(calculation: string) : void {
    if (calculation == 'add'){
      this.result= this.first + this.second;
    }else if (calculation=='sub'){
      this.result=  this.first - this.second;
    }else if (calculation=='mul'){
      this.result=  this.first*this.second;
    }else {
      this.result=  this.first/this.second;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
