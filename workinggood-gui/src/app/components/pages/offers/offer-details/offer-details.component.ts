import { Component, OnInit } from '@angular/core';
import {Offer} from "../../../models/offer/offer";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {OfferService} from "../../../services/offer/offer.service";
import {BaseReponse} from "../../../models/baseResponse";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  activatedRouteSubscription?: Subscription;
  offerId: string;
  offer: Offer;
  constructor(private activatedRoute: ActivatedRoute, private offerService: OfferService) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(params =>{
      this.offerId = params['id'];
  })
    this.offerService.getOfferById(this.offerId)
      .subscribe((result: BaseReponse) => {
        let object = result.object;
        this.offer = object;
      }, error => {
        console.log(error);
      })
  }
}
