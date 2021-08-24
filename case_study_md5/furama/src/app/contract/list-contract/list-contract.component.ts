import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  public contracts: Contract[] = [
    {
      contractId: 1,
      contractStartDate: '2021-08-24',
      contractEndDate: '2021-08-26',
      contractDeposit: 100,
      contractTotalMoney: 200,
      employeeId: 1,
      customerId: 2,
      serviceId: 1,
    },
    {
      contractId: 2,
      contractStartDate: '2021-08-26',
      contractEndDate: '2021-08-29',
      contractDeposit: 100,
      contractTotalMoney: 300,
      employeeId: 2,
      customerId: 3,
      serviceId: 1,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
