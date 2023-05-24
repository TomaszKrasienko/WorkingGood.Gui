import { Component, OnInit } from '@angular/core';
import {OfferService} from "../../../services/offer/offer.service";
import {Offer} from "../../../models/offer/offer";
import {PageEvent} from "@angular/material/paginator";
import {
  MultiParamOffersFilters
} from "../../../models/params/multiParamOutputFilers";

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  offersList: Offer[] = [];
  private _filters: MultiParamOffersFilters;
  length: number = 100;
  pageSize: number = 5;
  pageIndex: number = 0;

  constructor(private offersService: OfferService) { }

  ngOnInit(): void {
    this.setOffers();
  }
  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    console.log(this.pageSize);
    this.pageIndex = event.pageIndex;
    console.log(event.length);
    this.setOffers(this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }
  filterOffers(filter: MultiParamOffersFilters){
    this._filters = filter;
    this.setOffers(this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }
  private setOffers(rateFrom?: number, rateTo?: number, searchPhrase?: string): void {
    this.offersService.getAllActiveOffers(this.pageIndex + 1, this.pageSize, rateFrom, rateTo, searchPhrase)
      .subscribe((response) => {
      this.offersList = response.body;
      const pagination = this.offersService.getPaginationData(response.headers);
      this.length = pagination.totalCount;
    }, error => {
      console.log(error);
    });
  }
}
