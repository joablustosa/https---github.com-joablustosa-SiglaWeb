import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../sharedServices/loader.service';
import { LoginService } from '../sharedServices/login.services';

@Injectable({ providedIn: 'root' })
export class LoginInterceptor implements HttpInterceptor {
  showSpinner = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private loaderService: LoaderService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showSpinner = true;
    if (localStorage.getItem('tokenSigla') != null) {
      const cloneReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${localStorage.getItem('tokenSigla')}`
        ),
      });
      return next.handle(cloneReq).pipe(
        tap(
          (succ) => {
            return next
              .handle(req)
              .pipe(finalize(() => (this.showSpinner = false)));
          },
          (err) => {
            if (err.status == 401) {
              return this.loginService.logoutUsuario();
            }
          }
        )
      );
    } else {
      return next.handle(req.clone());
    }
  }
}
