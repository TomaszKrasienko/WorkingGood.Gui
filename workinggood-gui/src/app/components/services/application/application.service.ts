import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AddApplicationRequest} from "../../models/application/addApplication.Request";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applicationUrl: string = environment["APPLICATION_URL"];
  constructor(private httpClient: HttpClient) { }
  addApplication(addApplication: AddApplicationRequest): Observable<any>{
    return this.httpClient.post(`${this.applicationUrl}/applications/add`, addApplication).pipe(tap(console.log));
  }
  getByOfferId(offerId: string): Observable<any>{
    return this.httpClient.get(`${this.applicationUrl}/applications/getByOfferId/${offerId}`).pipe(tap(console.log));
  }
  getDocument(applicationId: string):Observable<any>{
    return this.httpClient.get(`${this.applicationUrl}/applications/downloadDocument/${applicationId}`, { responseType: 'blob' }).pipe(tap(console.log));
  }
}
