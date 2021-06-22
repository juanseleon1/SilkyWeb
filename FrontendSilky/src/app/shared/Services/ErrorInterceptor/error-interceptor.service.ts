import { Injectable } from '@angular/core';
import {
HttpInterceptor, HttpRequest,
HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  private exMapper:any;

  constructor() { }
  
     handleError(error: HttpErrorResponse){
      this.exMapper=environment.errorMapper;
      if( error.status && error.status===403){
        alert("No tiene autorizacion para ver este recurso");
        sessionStorage.removeItem('token');
      }else{
        alert(JSON.stringify(this.exMapper[error.error.code]));
      }
      return throwError(error);
     }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
     .pipe(
      catchError(this.handleError)
     )
  }
}
