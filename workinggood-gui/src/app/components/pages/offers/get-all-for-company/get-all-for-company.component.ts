import { Component, OnInit } from '@angular/core';
import {OfferService} from "../../../services/offer/offer.service";

@Component({
  selector: 'app-get-all-for-company',
  templateUrl: './get-all-for-company.component.html',
  styleUrls: ['./get-all-for-company.component.css']
})
export class GetAllForCompanyComponent implements OnInit {

  constructor(private offersService: OfferService) { }

  ngOnInit(): void {
    this.offersService.getAllForCompany()
      .subscribe(result => console.log(result), error => console.log(error));
  }

}
