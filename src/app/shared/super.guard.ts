import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { 

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn) { 

      let data = this.userService.loggedInUser();
      if (data.isAdmin != 1) { 
        this.router.navigate(['user-notes']);
      }
    }
    return true;
  }
  
}
