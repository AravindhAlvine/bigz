import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastService } from '../../shared/services/toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private toastService: ToastService,
    private router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers;

    if (headers.get("skip_interceptor"))
        return next.handle(req);
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
      headers = headers.set('Authorization', `Bearer ${authToken}`);
    }
    
    const url = /assets/.test(req.url) ? req.url : environment.baseUrl + req.url;

    if(headers.get("skip_content_type") !== 'true') {
      headers = headers.set('Content-Type', 'application/json');
    }
    
    const authReq = req.clone({ headers: headers, url: url });

    // send cloned request with header to the next handler by checking server errors.
    return next.handle(authReq).pipe(tap(
      (event: HttpEvent<any>) => {
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) {
            this.router.navigate(['/login'])
          }
          const message = err.error.message || 'Opps something went wrong, please try again after some time';
          this.toastService.showErrorToast(message);
        }
      }
    ))
  }
}
