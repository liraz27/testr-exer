import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  terms: any[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getTerms()
  }

  getTerms() {
    this.terms = this._dataService.getTerms();
  }

}
