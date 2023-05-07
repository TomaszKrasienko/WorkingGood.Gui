import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Login, LoginResponse} from "../../models/employeeAuth/login";
import {BaseReponse} from "../../models/baseResponse";
import {UserDataStorage} from "../../models/employeeAuth/userDataStorage";

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthService {
  //url: string= 'http://localhost:30010/employeesAuth';
  url:string = 'https://localhost:7205/employeesAuth';
  private USER_DATA_KEY: string = 'userData';
  constructor(private httpClient: HttpClient) { }
  login(loginCredentials: Login):Observable<any>{
    return this.httpClient.post<BaseReponse>(this.url+'/login', loginCredentials)
      .pipe(
        map((result: BaseReponse) => {
          let loginResponse: LoginResponse = result.object;
          this.setUserData(new UserDataStorage(
            loginResponse.token,
            loginResponse.refreshToken,
            loginCredentials.email
          ));
          return result;
        })
      )
  }
  private setUserData(userDataStorage: UserDataStorage): void {
    localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userDataStorage));
  }
  updateUserData(token: string, refreshToken: string): void {
    let userData: UserDataStorage = JSON.parse(
      localStorage.getItem(this.USER_DATA_KEY) as string
    );
    userData.token = token;
    userData.refreshToken = refreshToken;
    localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData));
  }
  logout(): void {
   localStorage.removeItem(this.USER_DATA_KEY);
  }
  getUserEmail(): string {
    let userData: UserDataStorage = JSON.parse(
      localStorage.getItem(this.USER_DATA_KEY) as string
    );
    return userData.emailAddress;
  }
  getRefreshToken(): string {
    let userData: UserDataStorage = JSON.parse(
      localStorage.getItem(this.USER_DATA_KEY) as string
    );
    return userData.refreshToken;
  }
  getToken(): string{
    let userData: UserDataStorage = JSON.parse(
      localStorage.getItem(this.USER_DATA_KEY) as string
    );
    return userData?.token;
  }
  isUserLogin():boolean{
    let data = localStorage.getItem(this.USER_DATA_KEY);
    if(data === null)
      return false;
    return true;
  }
}
