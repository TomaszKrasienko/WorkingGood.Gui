import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-list-for-company-filters',
  templateUrl: './offers-list-for-company-filters.component.html',
  styleUrls: ['./offers-list-for-company-filters.component.css']
})
export class OffersListForCompanyFiltersComponent implements OnInit {
  searchPhrase: string = '';
  isActiveAnswers: string[] = ['Yes', 'No'];
  isActive: string;
  onlyMine: boolean = false;
  rateFrom: string;
  rateTo: string;
  constructor() { }

  ngOnInit(): void {
  }
  filter(){
    console.log(`Search phrase ${this.searchPhrase}`);
    console.log(`IsActive ${this.isActive}`);
    console.log(`Only mine ${this.onlyMine}`);
    console.log(`Rate from ${this.rateFrom}`);
    console.log(`Rate to ${this.rateTo}`);
  }
}
