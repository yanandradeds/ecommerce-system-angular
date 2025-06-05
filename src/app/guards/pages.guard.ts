import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EcommerceApiService } from '../services/ecommerce_api.service';

export const pagesGuard: CanActivateFn = (route, state) => {
  const service = inject(EcommerceApiService);
  const router = inject(Router);

  if(service.isAuthenticated()) {
    return true
  }

  router.navigate(['']);
  return false;
};
