import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

let users = [{ id: 1, firstName: 'batman', lastName: 'batman', username: 'batman', password: 'batman' }];

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());

        function handleRoute() {
            switch(true) {
                case url.endsWith('/login') && method === 'POST':
                    return authenticate();
                    default:
                        // pass through any requests not handled above
                        return next.handle(request);
            }
        }

        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);

            if (!user) return error('Username or password is incorrect');
            return ok({
                username: user.username,                
                token: 'fake-jwt-token'
            })
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message: any) {
            return throwError({ error: { message }});
        }
    }
}

export const backendProvider =  {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
}