import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {stat} from 'fs';
import {DataService} from "./data.service";

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser')); //this.dataService.currentUserValue;
    if (currentUser) {
      return true;
    } else {
      //this.router.navigate(['/login']);
      this.router.navigate(['/login'], {state: {url: state.url}});
      return false;
    }
  }


}
