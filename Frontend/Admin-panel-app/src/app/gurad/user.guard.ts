import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state) => {
  
  const router = inject(Router);

  const userRole = sessionStorage.getItem('User-data');
  const adminRole = sessionStorage.getItem('Admin-data');
  const superadminRole = sessionStorage.getItem('Superadmin-data');

  if(userRole || adminRole || superadminRole){
    return true;
  }else{
    router.navigateByUrl('/app-login');
    return false;
  }

};
