import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from 'src/app/core/services';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


// Error Interceptor handles when an HTTP request from the Angular app returns a error response.
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from backend API
                this.authenticationService.logout();

                // reloads applications and then redirects user to login page
                location.reload(true);
            }

            // displays any other errors as is
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}