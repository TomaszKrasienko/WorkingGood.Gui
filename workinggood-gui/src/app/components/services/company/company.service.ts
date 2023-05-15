import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCompany } from '../../models/company/addCompany.Request';
import { Observable, tap } from 'rxjs';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl: string = `${environment.API_URL}/companies`;
  constructor(private httpClient: HttpClient) { }
  addNewCompany(addCompany: AddCompany): Observable<any>{
    return this.httpClient.post(this.companyUrl + '/addCompany', addCompany).pipe(tap(console.log));
  }
}
