import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ratings-by-category',
  templateUrl: './ratings-by-category.component.html',
  styleUrls: ['./ratings-by-category.component.scss']
})
export class RatingsByCategoryComponent implements OnInit {

  followers: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getRatingByCategory()
  }

  getRatingByCategory(){
    this.followers = this._dataService.getRatingByCategory();
  }

}
