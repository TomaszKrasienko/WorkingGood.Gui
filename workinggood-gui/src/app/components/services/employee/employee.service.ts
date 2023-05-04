import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmployee } from '../../models/employee/addEmployee.Request';
import { Observable, map, tap } from 'rxjs';
import { Login, LoginResponse } from '../../models/employeeAuth/login';
import { Refresh } from '../../models/employeeAuth/refresh';
import { BaseReponse } from '../../models/baseResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //url: string= 'http://localhost:30010/employeesAuth';
  url:string = 'https://localhost:7205/employeesAuth';
  constructor(private httpClient: HttpClient) { }
  registerEmployee(addEmployee: AddEmployee, companyId: string): Observable<any>{
    return this.httpClient.post(this.url+'/registerEmployee/'+companyId, addEmployee).pipe(tap(console.log));
  }
  verifyEmployee(verificationToken: string): Observable<any>{
    return this.httpClient.post(this.url+'/verifyEmployee/'+verificationToken, null).pipe(tap(console.log));
  }
  login(loginCredenials: Login): Observable<any>{
    return this.httpClient.post<BaseReponse>(this.url+'/login', loginCredenials).pipe(
      map((result: BaseReponse) => {
        var loginResponse: LoginResponse = result.object;
        this.setToken(loginResponse.token);
        this.setRefreshToken(loginResponse.refreshToken);
        localStorage.setItem('user', loginCredenials.email);
        return result;
      }));
  }
  refreshToken(refreshToken: Refresh): Observable<any>{
    return this.httpClient.post(this.url + '/refresh', refreshToken).pipe(tap(console.log));
  }
  getRefreshToken(): string{
    return sessionStorage.getItem('authRefreshToken') as string;
  }
  setRefreshToken(refreshToken: string){
     sessionStorage.setItem('authRefreshToken', refreshToken);
  }
  getToken(): string{
    return localStorage.getItem('authToken') as string;
  }
  setToken(token: string){
    localStorage.setItem('authToken', token);
  }
}
