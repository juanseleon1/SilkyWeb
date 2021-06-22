import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStatus } from './auth-status.enum';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(public authS: AuthService, private router: Router) {

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let des = false;

    const status = this.authS.isLoggedAuth(childRoute.data.roles);
    if (status === AuthStatus.Authorized) {
      des = true;
    } else if (status === AuthStatus.notLogged) {
      this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url } });
    }
    return des;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let des = false;
    const status = this.authS.isLoggedAuth(route.data.roles);
    if (status === AuthStatus.Authorized) {
      des = true;
    } else if (status === AuthStatus.notLogged) {
      this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url } });
    }
    return des;
  }
}
