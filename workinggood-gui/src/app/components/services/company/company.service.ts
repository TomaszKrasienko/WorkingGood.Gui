import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCompany } from '../../models/company/addCompany.Request';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  //url: string = 'http://localhost:30010/companies/';
  url: string = 'https://localhost:7205/companies/';
  constructor(private httpClient: HttpClient) { }
  addNewCompany(addCompany: AddCompany): Observable<any>{
    return this.httpClient.post(this.url + 'addCompany', addCompany).pipe(tap(console.log));
  }
}
