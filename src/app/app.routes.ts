import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { MyAssessments } from "./pages/my-assessments/my-assessments";
import { Profile } from "./pages/profile/profile";
import { CreateAssessment } from "./pages/create-assessment/create-assessment";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { About } from "./pages/about/about";
import { Privacy } from "./pages/privacy/privacy";
import { Contact } from "./pages/contact/contact";
import { Terms } from "./pages/terms/terms";
import { Cases } from "./pages/cases/cases";
import { Admin } from "./pages/admin/admin";
import { CaseDetails } from "./pages/cases/case-details/case-details";
// import { CASES_ROUTES } from "./pages/cases/cases.routes";
import { authGuard } from "./guards/auth-guard";
import { authChildGuard } from "./guards/auth-child-guard";

export const routes: Routes = [
  {
    path: "",
    component: Login,
  },
  {
    path: "register",
    component: Register,
  },
  {
    path: "home",
    component: Home,
  },
  {
    path: "myassessments",
    component: MyAssessments,
  },
  {
    path: "profile",
    component: Profile,
  },
  {
    path: "createassessment",
    component: CreateAssessment,
  },
  {
    path: "about",
    // component: About,
    loadComponent: () => import("./pages/about/about").then((c) => c.About),
  },
  {
    path: "privacy",
    // component: Privacy,
    loadComponent: () =>
      import("./pages/privacy/privacy").then((c) => c.Privacy),
  },
  {
    path: "terms",
    component: Terms,
  },
  {
    path: "contact",
    component: Contact,
  },

  {
    path: "cases",
    component: Cases,
    canActivateChild: [authChildGuard],
    loadChildren: () =>
      import("./pages/cases/cases.routes").then((r) => r.CASES_ROUTES),
  },

  {
    path: "admin",
    canActivate: [authGuard],
    component: Admin,
  },
  {
    path: "param/:id",
    component: About,
  },
];
