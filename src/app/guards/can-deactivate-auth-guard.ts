import { CanActivateFn } from '@angular/router';

export const canDeactivateAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
