import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from "../../../../models/offer/offer";
import {Router} from "@angular/router";
import {OfferService} from "../../../../services/offer/offer.service";
import {BaseReponse} from "../../../../models/baseResponse";

@Component({
  selector: 'app-offers-list-for-company-row',
  templateUrl: './offers-list-for-company-row.html',
  styleUrls: ['./offers-list-for-company-row.css']
})
export class OffersListForCompanyRow implements OnInit {
  @Input() offer: Offer;
  @Output() emitStatusChange = new EventEmitter<string>();
  constructor(
    private offerService: OfferService,
    private router: Router) { }
  ngOnInit(): void {
    console.log(this.offer);
  }
  redirectToEdit(): void {
    this.router.navigate([`editOffer/${this.offer.id}`]);
  }
  delete(): void {
    this.offerService.deleteOffer(this.offer.id).subscribe(
      (result:BaseReponse) => {
        window.location.reload();
      },
      (error: BaseReponse) => {
        console.log(error);
      }
    )
  }
  changeStatus(): void{
    this.offerService.changeOfferStatus(this.offer.id)
      .subscribe((result:BaseReponse) => {
        this.emitStatusChange.emit(this.offer.id);
      }, (error:BaseReponse) => {
        console.log(error);
      })
  }
}
