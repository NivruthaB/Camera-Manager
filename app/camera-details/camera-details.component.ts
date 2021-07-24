import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/internal/Observable';
import { CollectionViewer } from '@angular/cdk/collections';
import { of } from 'rxjs/internal/observable/of';


@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CameraDetailsComponent implements AfterViewInit {

  displayedColumns: string[] = ['cameraId', 'name', 'deviceTypeId', 'ethMacAddress', 'zoneId', 'accountId'];
  dataSource = new ExampleDataSource()
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  cameraId : any;
  expandedDetails: any[] = [];
  StatusData : any = [{
    "cameraId": 1,
    "online": true,
    "recordingOnCloud": true,
    "recordingOnSd": true,
    "audioEnabled": true,
    "passwordKnown": true,
    "passwordStatus": "resetting",
    "firmwareStatus": "upgradable",
    "connectionType": "Ethernet",
    "lastConnectionResult": "neverConnected"
  },
  {
    "cameraId": 2,
    "online": true,
    "recordingOnCloud": true,
    "recordingOnSd": true,
    "audioEnabled": true,
    "passwordKnown": true,
    "passwordStatus": "resetting",
    "firmwareStatus": "upgradable",
    "connectionType": "Ethernet",
    "lastConnectionResult": "neverConnected"
  },
  {
    "cameraId": 3,
    "online": true,
    "recordingOnCloud": true,
    "recordingOnSd": true,
    "audioEnabled": true,
    "passwordKnown": true,
    "passwordStatus": "resetting",
    "firmwareStatus": "upgradable",
    "connectionType": "Ethernet",
    "lastConnectionResult": "neverConnected"
  },
  {
    "cameraId": 4,
    "online": true,
    "recordingOnCloud": true,
    "recordingOnSd": true,
    "audioEnabled": true,
    "passwordKnown": true,
    "passwordStatus": "resetting",
    "firmwareStatus": "upgradable",
    "connectionType": "Ethernet",
    "lastConnectionResult": "neverConnected"
  },
  {
    "cameraId": 5,
    "online": true,
    "recordingOnCloud": true,
    "recordingOnSd": true,
    "audioEnabled": true,
    "passwordKnown": true,
    "passwordStatus": "resetting",
    "firmwareStatus": "upgradable",
    "connectionType": "Ethernet",
    "lastConnectionResult": "neverConnected"
  }]
  constructor() { }
  
  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    console.log(this.expandedElement)
  }

  filterDataAfterExpansion(row : any){
    this.expandedDetails = this.StatusData.filter((element : any) => element.cameraId == row.cameraId)
    console.log(this.expandedDetails)
  }

}
export interface PeriodicElement {
  cameraId: number;
  name: string;
  deviceTypeId: number;
  ethMacAddress: string;
  zoneId:number;
  accountId:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "cameraId": 1,
    "name": "string",
    "deviceTypeId": 0,
    "ethMacAddress": "string",
    "zoneId": 0,
    "accountId": 0
  },
  {
    "cameraId": 2,
    "name": "string",
    "deviceTypeId": 0,
    "ethMacAddress": "string",
    "zoneId": 0,
    "accountId": 0
  },
  {
    "cameraId": 3,
    "name": "string",
    "deviceTypeId": 0,
    "ethMacAddress": "string",
    "zoneId": 0,
    "accountId": 0
  },
  {
    "cameraId": 4,
    "name": "string",
    "deviceTypeId": 0,
    "ethMacAddress": "string",
    "zoneId": 0,
    "accountId": 0
  },
  {
    "cameraId": 5,
    "name": "string",
    "deviceTypeId": 0,
    "ethMacAddress": "string",
    "zoneId": 0,
    "accountId": 0
  },
];


export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows: any[] = [];
    ELEMENT_DATA.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);    
  }

  disconnect() { }
}
