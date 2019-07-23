import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor (
        private router: Router,
        private authenticationService: AuthenticationService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentAuthUser = this.authenticationService.currentUserValue;

        if (currentAuthUser) {
            //authorized user
            return true;
        }

        // not logged in, hence redirect the user to login page with the return url
        this.router.navigate(['./login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}