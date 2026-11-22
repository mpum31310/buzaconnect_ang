import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedin = false;

  if (isLoggedin) {
    return true;
  }
  return router.createUrlTree(["/home"]);
};
