import { Routes } from "@angular/router";
import { CaseDetails } from "./case-details/case-details";
import { Contact } from "../contact/contact";

export const CASES_ROUTES: Routes = [
  { path: "", component: Contact },
  { path: "detail/:id", component: CaseDetails },
];
