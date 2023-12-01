import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {stat} from 'fs';
import {User} from "../_models";

@Injectable()

export class SuperAdminService implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser')); //this.dataService.currentUserValue;
    if (currentUser && currentUser.superAdmin) {
      return true;
    } else {
      this.router.navigate(['/reference']);
      return false;
    }
  }


}
