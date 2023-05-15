import { Component, Input, OnInit} from '@angular/core';
import {Offer} from "../../../../models/offer/offer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offers-list-for-company-row',
  templateUrl: './offers-list-for-company-row.html',
  styleUrls: ['./offers-list-for-company-row.css']
})
export class OffersListForCompanyRow implements OnInit {
  @Input() offer: Offer;
  constructor(private router: Router) { }
  ngOnInit(): void {
    console.log(this.offer);
  }
  redirectToEdit(): void {
    this.router.navigate([`editOffer/${this.offer.id}`]);
  }
}
