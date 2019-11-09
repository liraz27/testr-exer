import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-support-request',
  templateUrl: './support-request.component.html',
  styleUrls: ['./support-request.component.scss']
})
export class SupportRequestComponent implements OnInit {

  supportRequests: any[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getSupportRequests();
  }

  getSupportRequests() {
    this.supportRequests = this._dataService.getSupportRequests();
  }

  addRequest() {
    this.supportRequests.push(this._dataService.createNewRandomRequeust());
    console.log(this.supportRequests);
  }

  changeToSent(requestIndex: number) {
    this.supportRequests.map(request => {
      if(request.index === requestIndex) {
        request.status = 'sent';
      }
    })
  }
}
