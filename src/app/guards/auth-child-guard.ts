import { CanActivateFn } from "@angular/router";

export const authChildGuard: CanActivateFn = (route, state) => {
  const isLoggedin = false;
  return isLoggedin;
};
