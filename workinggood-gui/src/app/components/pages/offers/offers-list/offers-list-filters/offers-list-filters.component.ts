import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MultiParamOffersFilters } from "../../../../models/params/multiParamOutputFilers";

@Component({
  selector: 'app-offers-list-filters',
  templateUrl: './offers-list-filters.component.html',
  styleUrls: ['./offers-list-filters.component.css']
})
export class OffersListFiltersComponent implements OnInit {
   @Output() multiParamsEventEmitter = new EventEmitter<MultiParamOffersFilters>();
  searchPhrase: string = null;
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
    this.rateFrom = null;
    this.rateTo = null;
  }

  private handleMultiParamsEventEmitter(): void {
    const multiParamOffersFilters: MultiParamOffersFilters = {
      rateFrom: parseInt(this.rateFrom) ?? null,
      rateTo: parseInt(this.rateTo) ?? null,
      searchPhrase: this.searchPhrase
    }
    this.multiParamsEventEmitter.emit(multiParamOffersFilters);
  }
}
