import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, catchError, throwError, BehaviorSubject, switchMap, take, filter} from "rxjs";
import { EmployeeService } from "../employee/employee.service";
import { Refresh } from "../../models/employeeAuth/refresh";
import { BaseReponse } from "../../models/baseResponse";
import { Route, Router } from "@angular/router";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    private isRefreshing: boolean = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor(private employeeService: EmployeeService, private router: Router){
    }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.employeeService.getToken();
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
          return this.employeeService.refreshToken(new Refresh(this.employeeService.getRefreshToken())).pipe(
            switchMap((result: BaseReponse) => {
              this.isRefreshing = false;
              const objectResult = result.object;
              this.employeeService.setToken(objectResult.token);
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
              return next.handle(this.addToken(request, this.employeeService.getToken()));
            })
          );
        }
    }

}
