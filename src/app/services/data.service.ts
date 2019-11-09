import { Injectable } from '@angular/core';
import * as initialData from '../data/initialData.json';
import * as additionalData from '../data/additionalData.json';
import uuid from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initialData: any;
  additionalData: any;

  constructor() {
    this.initialData = Object.assign({}, initialData['default']);
    this.additionalData = Object.assign({}, additionalData['default']);
  }

  getGeneralInsertionsCount(): number {
    return this.initialData.general.insertionsCount;
  }

  getGeneralFollowersCount(): string {
    return this.initialData.charts.general.followersCount.toLocaleString();
  }

  getRatingByCategory(): string {
    return this.initialData.charts.ratingsByCategory.followersCount.toLocaleString();
  }

  getTerms(): any[] {
    let terms = [];
    this.initialData.terms.forEach((term: number, index: number) => {
      terms.push({ index: index + 1, term: term });
    });
    return terms;
  }

  getSupportRequests(): any[] {
    const requests = this.initialData.supportRequests.map((request: any) => {
      request.index = uuid();
      return request;
    });
    return requests;
  }

  createNewRandomRequeust() {
    const additionalDataArr = this.additionalData.supportRequests;
    const randomIndex = Math.floor(Math.random() * Math.floor(additionalDataArr.length - 1));
    const additionalDataObj = Object.assign({}, additionalDataArr[randomIndex]);
    additionalDataObj.index = uuid();
    return additionalDataObj;
  }

}
