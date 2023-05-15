import { Component, OnInit } from '@angular/core';
import {AddOfferRequest} from "../../../models/offer/addOffer.Request";
import {OfferService} from "../../../services/offer/offer.service";
import {BaseReponse} from "../../../models/baseResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  addOffer: Partial<AddOfferRequest> = {};
  constructor(private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
  }
  submit():void{
    console.log(this.addOffer);
    this.offerService.addOffer(this.addOffer as AddOfferRequest)
      .subscribe((result: BaseReponse) => {
        this.router.navigate(['/offersForCompany']);
      }, (error: BaseReponse)=>{
        console.log(error);
    });
  }
}
