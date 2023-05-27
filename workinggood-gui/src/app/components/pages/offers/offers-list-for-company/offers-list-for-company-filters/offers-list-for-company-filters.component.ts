import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MultiParamOffersForCompanyFilters} from "../../../../models/params/multiParamOutputFilers";
import {FiltersService} from "../../../../services/filters/filters.service";

@Component({
  selector: 'app-offers-list-for-company-filters',
  templateUrl: './offers-list-for-company-filters.component.html',
  styleUrls: ['./offers-list-for-company-filters.component.css']
})
export class OffersListForCompanyFiltersComponent implements OnInit {
  @Output() multiParamsEventEmitter = new EventEmitter<MultiParamOffersForCompanyFilters>();
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
  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.setFilters();
  }

  setFilters(): void{
    let multiParaMOffersForCompanyFilters: MultiParamOffersForCompanyFilters = this.filtersService.getOffersCompanyFilters();
    this.searchPhrase = multiParaMOffersForCompanyFilters.searchPhrase;
    this.isActive = multiParaMOffersForCompanyFilters.isActive;
    this.authorOffers = multiParaMOffersForCompanyFilters.authorOffers;
    this.rateTo = multiParaMOffersForCompanyFilters.rateTo.toString();
    this.rateFrom = multiParaMOffersForCompanyFilters.rateFrom.toString();
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
    this.filtersService.clearOffersCompanyFilters();
  }

  private handleMultiParamsEventEmitter(): void {
    const multiParaMOffersForCompanyFilters: MultiParamOffersForCompanyFilters = {
      isActive: this.isActive,
      rateFrom: parseInt(this.rateFrom) ?? null,
      rateTo: parseInt(this.rateTo) ?? null,
      authorOffers: this.authorOffers,
      searchPhrase: this.searchPhrase
    }
    this.filtersService.setOffersCompanyFilters(multiParaMOffersForCompanyFilters);
    this.multiParamsEventEmitter.emit(multiParaMOffersForCompanyFilters);
  }
}
