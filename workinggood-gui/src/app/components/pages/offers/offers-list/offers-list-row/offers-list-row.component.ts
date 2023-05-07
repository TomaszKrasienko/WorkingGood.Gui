import { Component, OnInit } from '@angular/core';
import {Offer} from "../../../../models/offer/offer";
import {OfferService} from "../../../../services/offer/offer.service";
import {BaseReponse} from "../../../../models/baseResponse";
import {timeSinceInMicros} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";

@Component({
  selector: 'app-offers-list-row',
  templateUrl: './offers-list-row.component.html',
  styleUrls: ['./offers-list-row.component.css']
})
export class OffersListRowComponent implements OnInit {
  offer: Offer;
  offerId: string = '6b3eee2f-ce02-4aef-bd96-8a028a643dbb';
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getOfferById(this.offerId)
      .subscribe((result: BaseReponse) => {
        this.offer = result.object;
      }, error => console.log(error))
  }

}
