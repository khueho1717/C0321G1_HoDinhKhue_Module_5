import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  public services: Service[] = [
    {
      serviceId: 1,
      serviceCode: 'DV-1231',
      serviceName: 'Villa',
      serviceArea: 200,
      serviceCost: 300,
      rentType: 'nam',
      serviceType: 'Villa',
      numberOfFloors: 2
    },
    {
      serviceId: 2,
      serviceCode: 'DV-1214',
      serviceName: 'House',
      serviceArea: 150,
      serviceCost: 2000,
      rentType: 'thang',
      serviceType: 'House',
      numberOfFloors: 3
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
