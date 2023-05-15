import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, catchError, throwError, BehaviorSubject, switchMap, take, filter} from "rxjs";
import { Refresh } from "../../models/employeeAuth/refresh";
import { BaseReponse } from "../../models/baseResponse";
import { Router } from "@angular/router";
import {EmployeeAuthService} from "../employeeAuth/employee-auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    private isRefreshing: boolean = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor(private employeeAuthService: EmployeeAuthService, private router: Router){
    }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.employeeAuthService.getToken();
        if(token){
            req = this.addToken(req, token);
        }
        return next.handle(req).pipe(
          catchError((error) => {
            if(error instanceof HttpErrorResponse && error.status === 401){
                return this.handle401Error(req, next);
            }else {
              return throwError(() => error);
            }
          })
        );
    }
    private addToken(request: HttpRequest<any>, token: string){
        return request.clone({
            setHeaders:{
                Authorization: `Bearer ${token}`,
            }
        });
    }
    private handle401Error(request: HttpRequest<any>, next: HttpHandler){
        if(!this.isRefreshing) {
          this.isRefreshing = true;
          this.refreshTokenSubject.next(null);
          return this.employeeAuthService.refreshToken(new Refresh(this.employeeAuthService.getRefreshToken())).pipe(
            switchMap((result: BaseReponse) => {
              this.isRefreshing = false;
              const objectResult = result.object;
              this.employeeAuthService.updateUserData(objectResult.token, objectResult.refreshToken);
              this.refreshTokenSubject.next(objectResult.refreshToken);
              return next.handle(this.addToken(request, objectResult.token));
            })
          )
        }else {
          console.log('to się powinno zrobić');
          this.router.navigate(['login']);
          return this.refreshTokenSubject.pipe(
            filter((token) => token != null),
            take(1),
            switchMap((jwt) => {
              return next.handle(this.addToken(request, this.employeeAuthService.getToken()));
            })
          );
        }
    }

}
