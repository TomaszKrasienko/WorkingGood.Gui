import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Offer} from "../../../models/offer/offer";
import {OfferService} from "../../../services/offer/offer.service";
import {BaseReponse} from "../../../models/baseResponse";
import {EditOfferRequest} from "../../../models/offer/editOffer.Request";

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {
  activatedRouteSubscription?: Subscription;
  offerId: string;
  offer: Partial<Offer> = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private offerService: OfferService,
    private router: Router) { }
  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(params =>{
      this.offerId = params['id'];
    });
    this.getOffer();
  }
  getOffer(): void{
    this.offerService.getOfferById(this.offerId)
      .subscribe(
        (result: Offer) => {
          this.offer = result;
        }, error => console.log(error));
  }
  submit(): void {
    const editOfferRequest: EditOfferRequest = {
      title: this.offer.title,
      description: this.offer.description,
      isActive: this.offer.isActive,
      salaryRangeMax: this.offer.salaryRangeMax,
      salaryRangeMin: this.offer.salaryRangeMin
    }
    this.offerService.editOffer(editOfferRequest, this.offerId)
      .subscribe((result: BaseReponse) => {
        this.router.navigate([(`/offer/${this.offerId}`)]);
      }, (error: BaseReponse) => {
        console.log(error);
      })
  }
}
