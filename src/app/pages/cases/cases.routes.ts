import { Routes } from "@angular/router";
import { CaseDetails } from "./case-details/case-details";
import { Contact } from "../contact/contact";
import {Cases} from './cases'

export const CASES_ROUTES: Routes = [
  {
            path: '',
            component: Cases
        },
        {
            path: 'casedetail',
            component: CaseDetails
        }
];
