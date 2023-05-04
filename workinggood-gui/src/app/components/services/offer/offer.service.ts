import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

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
}
