import { Component, OnInit } from '@angular/core';
import {AddOfferRequest} from "../../../models/offer/addOffer.Request";
import {OfferService} from "../../../services/offer/offer.service";
import {BaseReponse} from "../../../models/baseResponse";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  addOffer: Partial<AddOfferRequest> = {};
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
  }
  submit():void{
    console.log(this.addOffer);
    this.offerService.addOffer(this.addOffer as AddOfferRequest)
      .subscribe((result: BaseReponse) => {
        console.log(result);
       //routing do offerDetails
      }, (error: BaseReponse)=>{
        console.log(error);
    });
  }
}
