import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import {
  provideRouter,
  PreloadAllModules,
  withPreloading,
} from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // provideRouter(routes),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
};
