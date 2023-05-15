import { Component, OnInit} from '@angular/core';
import {OfferService} from "../../../services/offer/offer.service";
import {Offer} from "../../../models/offer/offer";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-offers-list-for-company',
  templateUrl: './offers-list-for-company.html',
  styleUrls: ['./offers-list-for-company.css']
})
export class OffersListForCompany implements OnInit {
  offersList: Offer[] = [];
  length: number = 100;
  pageSize: number = 5;
  pageIndex: number = 0;
  constructor(private offersService: OfferService) { }
  ngOnInit(): void {
    this.setOffers();
  }
  handlePageEvent(event: PageEvent): void {

  }
  private setOffers(): void {
    this.offersService.getAllForCompany(this.pageIndex + 1, this.pageSize)
      .subscribe(response => {
        this.offersList = response.body;
        const pagination = this.offersService.getPaginationData(response.headers);
        this.length = pagination.totalCount;
      }, error => console.log(error));
  }
}
