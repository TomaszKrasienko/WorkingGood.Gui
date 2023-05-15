import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl: string = `${environment.API_URL}/employees`;
  constructor(private httpClient: HttpClient) { }
  getLoggedUser(): Observable<any>{
    return this.httpClient.get(this.employeeUrl + '/getLoggedEmployee').pipe(tap(console.log));
  }
}
