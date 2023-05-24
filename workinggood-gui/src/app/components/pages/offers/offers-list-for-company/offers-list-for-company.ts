import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OfferService} from "../../../services/offer/offer.service";
import {Offer} from "../../../models/offer/offer";
import {PageEvent} from "@angular/material/paginator";
import {MultiParaMOffersForCompanyFilters} from "../../../models/params/multiParamOutputFilers";
import {of} from "rxjs";

@Component({
  selector: 'app-offers-list-for-company',
  templateUrl: './offers-list-for-company.html',
  styleUrls: ['./offers-list-for-company.css']
})
export class OffersListForCompany implements OnInit {
  private _filters: MultiParaMOffersForCompanyFilters;
  offersList: Offer[] = [];
  length: number = 100;
  pageSize: number = 5;
  pageIndex: number = 0;
  constructor(private offersService: OfferService) { }
  ngOnInit(): void {
    this.setOffers();
  }
  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.setOffers(this._filters.isActive, this._filters.authorOffers, this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }
  filterOffers(filters: MultiParaMOffersForCompanyFilters){
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
}
