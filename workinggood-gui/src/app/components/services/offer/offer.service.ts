import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AddOfferComponent} from "../../pages/offers/add-offer/add-offer.component";
import {AddOfferRequest} from "../../models/offer/addOffer.Request";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  //url: string = 'http://localhost:30010/offers/'
  url: string = 'https://localhost:7205/offers'
  constructor(private httpClient: HttpClient)
  {

  }
  getAllForCompany(): Observable<any>{
    return this.httpClient.get(this.url + '/getAllForCompany').pipe(tap(console.log));
  }
  addOffer(addOffer: AddOfferRequest): Observable<any>{
    return this.httpClient.post(this.url + '/addOffer', addOffer).pipe(tap(console.log));
  }
  getOfferById(offerId: string): Observable<any>{
    return this.httpClient.get(this.url + '/getActiveById/'+offerId).pipe(tap(console.log));
  }
}
