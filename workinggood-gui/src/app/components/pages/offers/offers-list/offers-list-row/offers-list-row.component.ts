import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../../../../models/offer/offer";
import {OfferService} from "../../../../services/offer/offer.service";
import {BaseReponse} from "../../../../models/baseResponse";
import {timeSinceInMicros} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offers-list-row',
  templateUrl: './offers-list-row.component.html',
  styleUrls: ['./offers-list-row.component.css']
})
export class OffersListRowComponent implements OnInit {
  @Input() offer: Offer;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToApply(): void{
    this.router.navigate([`addApplication/${this.offer.id}`])
  }
}
