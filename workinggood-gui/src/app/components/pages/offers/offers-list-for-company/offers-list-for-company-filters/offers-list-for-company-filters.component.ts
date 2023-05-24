import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MultiParaMOffersForCompanyFilters} from "../../../../models/params/multiParamOutputFilers";

@Component({
  selector: 'app-offers-list-for-company-filters',
  templateUrl: './offers-list-for-company-filters.component.html',
  styleUrls: ['./offers-list-for-company-filters.component.css']
})
export class OffersListForCompanyFiltersComponent implements OnInit {
  @Output() multiParamsEventEmitter = new EventEmitter<MultiParaMOffersForCompanyFilters>();
  searchPhrase: string = null;
  isActiveAnswers: any[] = [
    {name: 'Yes', value: true},
    {name: 'No', value: false}
  ];
  isActive: boolean = null;
  authorOffersAnswers: any[] = [
    {name: 'All', value: false},
    {name:'Mine', value: true}
  ];
  authorOffers: boolean = this.authorOffersAnswers[0].value;
  rateFrom: string = null;
  rateTo: string = null;
  constructor() { }

  ngOnInit(): void {
  }

  filter(){
    this.handleMultiParamsEventEmitter();
  }

  clearAll(): void {
    this.searchPhrase = null;
    this.isActive = null;
    this.authorOffers = null;
    this.rateFrom = null;
    this.rateTo = null;
  }

  private handleMultiParamsEventEmitter(): void {
    const multiParaMOffersForCompanyFilters: MultiParaMOffersForCompanyFilters = {
      isActive: this.isActive,
      rateFrom: parseInt(this.rateFrom) ?? null,
      rateTo: parseInt(this.rateTo) ?? null,
      authorOffers: this.authorOffers,
      searchPhrase: this.searchPhrase
    }
    this.multiParamsEventEmitter.emit(multiParaMOffersForCompanyFilters);
  }
}
