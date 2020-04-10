import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable ({ providedIn: 'root' })
export class AuthenticationService {
    private authenticatedUserSubject: BehaviorSubject<any>;
    public authenticatedUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.authenticatedUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.authenticatedUser = this.authenticatedUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.authenticatedUserSubject.value;
    }

    login (username: any, password: any) {
        return this.http.post<any>(`${environment.baseUrl}/login`, { username, password }).pipe(map(user => {
            console.log(user);
            // store user details and jwt token in local storage to keep user logged
            // in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.authenticatedUserSubject.next(user);
            return user; 
        }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.authenticatedUserSubject.next(null);
    }
}