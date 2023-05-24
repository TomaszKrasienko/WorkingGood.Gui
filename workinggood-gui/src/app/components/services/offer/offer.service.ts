import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AddOfferRequest} from "../../models/offer/addOffer.Request";
import {environment} from "../../../../environments/environment";
import {PaginationResponse} from "../../models/paginationResponse";
import {Offer} from "../../models/offer/offer";
import {EditOfferRequest} from "../../models/offer/editOffer.Request";
@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private _offerUrl: string = `${environment.API_URL}/offers`;
  constructor(private httpClient: HttpClient)
  {

  }

  getAllForCompany(pageNumber: number, pageSize: number, isActive?: boolean, authorOffers?: boolean, rateFrom?: number, rateTo?: number, searchPhrase?: string): Observable<any>{
    let params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize)
      .set('CompanyOffers', true)
    if(isActive != null || isActive != undefined)
      params = params.set('IsActive', isActive);
    if(authorOffers != null || authorOffers != undefined)
      params = params.set('AuthorOffers', authorOffers);
    if(rateFrom > 0)
      params = params.set('RateFrom', rateFrom);
    if(rateTo > 0)
      params = params.set('RateTo', rateTo);
    if(searchPhrase != null || searchPhrase != undefined)
      params = params.set('SearchPhrase', searchPhrase);
    return this.httpClient.get(this._offerUrl + '/getOffersList', {params, observe: "response"}).pipe(tap(console.log));
  }

  getAllActiveOffers(pageNumber: number, pageSize: number, rateFrom?: number, rateTo?: number, searchPhrase?: string): Observable<any>{
    let params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize)
      .set('IsActive', true);
    if(rateFrom > 0)
      params = params.set('RateFrom', rateFrom);
    if(rateTo > 0)
      params = params.set('RateTo', rateTo);
    if(searchPhrase != null || searchPhrase != undefined)
      params = params.set('SearchPhrase', searchPhrase);
    return this.httpClient.get(this._offerUrl+'/getOffersList', {params, observe: 'response'}).pipe(tap(console.log));
  }

  addOffer(addOffer: AddOfferRequest): Observable<any>{
    return this.httpClient.post(this._offerUrl + '/addOffer', addOffer).pipe(tap(console.log));
  }

  editOffer(offer: EditOfferRequest, offerId: string): Observable<any>{
    return this.httpClient.put(this._offerUrl + '/editOffer/'+offerId, offer).pipe(tap(console.log));
  }

  changeOfferStatus(offerId: string): Observable<any>{
    return this.httpClient.patch(`${this._offerUrl}/changeOfferStatus/${offerId}`, null).pipe(tap(console.log));
  }

  getOfferById(offerId: string): Observable<any>{
    return this.httpClient.get(this._offerUrl + '/getOfferById/' + offerId).pipe(tap(console.log));
  }

  getPaginationData(header: HttpHeaders): PaginationResponse {
    const paginationMetaData = header.get('x-pagination');
    return JSON.parse(paginationMetaData);
  }

  deleteOffer(offerId: string): Observable<any> {
    return this.httpClient.delete(`${this._offerUrl}/deleteOffer/${offerId}`).pipe(tap(console.log));
  }
}
