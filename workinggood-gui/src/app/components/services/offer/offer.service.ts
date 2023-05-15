import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AddOfferComponent} from "../../pages/offers/add-offer/add-offer.component";
import {AddOfferRequest} from "../../models/offer/addOffer.Request";
import {environment} from "../../../../environments/environment";
import {calcPossibleSecurityContexts} from "@angular/compiler/src/template_parser/binding_parser";
import {PaginationResponse} from "../../models/paginationResponse";

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private _offerUrl: string = `${environment.API_URL}/offers`;
  constructor(private httpClient: HttpClient)
  {

  }
  getAllForCompany(pageNumber: number, pageSize: number): Observable<any>{
    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize)
      .set('CompanyOffers', true)
    return this.httpClient.get(this._offerUrl + '/getOffersList', {params, observe: 'response'}).pipe(tap(console.log));
  }
  addOffer(addOffer: AddOfferRequest): Observable<any>{
    return this.httpClient.post(this._offerUrl + '/addOffer', addOffer).pipe(tap(console.log));
  }
  getOfferById(offerId: string): Observable<any>{
    return this.httpClient.get(this._offerUrl + '/getActiveById/'+offerId).pipe(tap(console.log));
  }
  getAllActiveOffers(pageNumber: number, pageSize: number, isActive: boolean): Observable<any>{
    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize)
      .set('IsActive', true);
    return this.httpClient.get(this._offerUrl+'/getOffersList', {params, observe: 'response'}).pipe(tap(console.log));
  }
  getPaginationData(header: HttpHeaders): PaginationResponse {
    const paginationMetaData = header.get('x-pagination');
    return JSON.parse(paginationMetaData);
  }
}
