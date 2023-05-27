import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {OfferService} from "../../../services/offer/offer.service";
import {Offer} from "../../../models/offer/offer";
import {PageEvent} from "@angular/material/paginator";
import {MultiParamOffersForCompanyFilters} from "../../../models/params/multiParamOutputFilers";
import {of} from "rxjs";
import {FiltersService} from "../../../services/filters/filters.service";

@Component({
  selector: 'app-offers-list-for-company',
  templateUrl: './offers-list-for-company.html',
  styleUrls: ['./offers-list-for-company.css']
})
export class OffersListForCompany implements OnInit, OnDestroy {
  private _filters: MultiParamOffersForCompanyFilters;
  offersList: Offer[] = [];
  length: number = 100;
  pageSize: number = 5;
  pageIndex: number = 0;
  constructor(private offersService: OfferService, private filtersService: FiltersService) { }
  ngOnInit(): void {
    this._filters = this.filtersService.getOffersCompanyFilters();
    this.setOffers(this._filters.isActive, this._filters.authorOffers, this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }
  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.setOffers(this._filters.isActive, this._filters.authorOffers, this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }
  filterOffers(filters: MultiParamOffersForCompanyFilters){
    this._filters = filters;
    this.setOffers(this._filters.isActive, this._filters.authorOffers, this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }
  private setOffers(isActive?: boolean, authorOffers?: boolean, rateFrom?: number, rateTo?: number, searchPhrase?: string): void {
    this.offersService.getAllForCompany(this.pageIndex + 1, this.pageSize, isActive, authorOffers, rateFrom, rateTo, searchPhrase)
      .subscribe(response => {
        this.offersList = response.body;
        const pagination = this.offersService.getPaginationData(response.headers);
        this.length = pagination.totalCount;
      }, error => console.log(error));
  }
  refreshStatus(offerId: string){
    const offer = this.offersList.find(item => item.id == offerId);
    offer.isActive = !offer.isActive;
  }

  ngOnDestroy(): void {
    console.log('On destroy executed');
  }
}
