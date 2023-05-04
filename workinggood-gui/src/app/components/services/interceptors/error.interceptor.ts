import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, Observable, tap} from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(() => {}, (err: any) => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401) {
          this.router.navigate(['login']);
        }
        return;
      }
    }))
  }
}
