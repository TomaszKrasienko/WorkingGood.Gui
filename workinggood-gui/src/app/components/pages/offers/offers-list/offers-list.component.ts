import { Component, OnInit } from '@angular/core';
import {OfferService} from "../../../services/offer/offer.service";
import {Offer} from "../../../models/offer/offer";
import {BaseReponse} from "../../../models/baseResponse";
import {PaginationResponse} from "../../../models/paginationResponse";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  offersList: Offer[] = [];

  length: number = 100;
  pageSize: number = 5;
  pageIndex: number = 0;

  constructor(private offersService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }
  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    console.log(this.pageSize);
    this.pageIndex = event.pageIndex;
    console.log(event.length);
    this.getOffers();
  }
  private getOffers(): void {
    this.offersService.getAllActiveOffers(this.pageIndex + 1, this.pageSize, true)
      .subscribe((response) => {
      this.offersList = response.body;
      // const paginationMetaData = response.headers.get('x-pagination');
      // const pagination = JSON.parse(paginationMetaData);
      const pagination = this.offersService.getPaginationData(response.headers);
      this.length = pagination.totalCount;
    }, error => {
      console.log(error);
    });
  }
}
