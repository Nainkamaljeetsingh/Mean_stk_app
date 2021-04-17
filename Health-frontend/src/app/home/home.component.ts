import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({ templateUrl: 'home.component.html',
             styleUrls: ['home.component.scss']
 })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    arr=["https://img.icons8.com/ios/50/ffffff/medical-doctor.png","https://img.icons8.com/ios/100/ffffff/medical-heart.png","https://img.icons8.com/wired/64/ffffff/diabetes-monitor.png","https://img.icons8.com/metro/52/ffffff/stomach.png","https://img.icons8.com/ios-filled/100/ffffff/spine.png","https://img.icons8.com/dotty/80/ffffff/sleepy-eyes.png","https://img.icons8.com/ios/100/ffffff/leg-massage-area.png","https://img.icons8.com/material-outlined/96/ffffff/stretching.png"];
  arr1=["https://img.icons8.com/wired/128/ffffff/cursor.png","https://img.icons8.com/material-sharp/24/ffffff/plus--v2.png","https://img.icons8.com/ios-filled/100/ffffff/what-i-do.png","https://img.icons8.com/metro/52/ffffff/ask-question.png","https://img.icons8.com/windows/96/ffffff/call-transfer.png","https://img.icons8.com/ios-filled/100/ffffff/recieve.png","https://img.icons8.com/ios-filled/50/ffffff/day-care.png","https://img.icons8.com/windows/96/ffffff/call-transfer.png"]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}