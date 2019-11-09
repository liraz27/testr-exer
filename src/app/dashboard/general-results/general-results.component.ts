import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-general-results',
  templateUrl: './general-results.component.html',
  styleUrls: ['./general-results.component.scss']
})
export class GeneralResultComponent implements OnInit {

  followersCount: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getfollowersCount();
  }

  getfollowersCount(){
    this.followersCount = this._dataService.getGeneralFollowersCount();
  }

}
