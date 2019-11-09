import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  insertionsCount: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getInsertionsCount();
  }

  getInsertionsCount() {
    this.insertionsCount = this._dataService.getGeneralInsertionsCount();
  }

}
