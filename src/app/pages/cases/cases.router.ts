import { Routes } from "@angular/router";
// import {}from "./pages/"
// import { CASES_ROUTES } from "./pages/cases/cases.routes";
import {Cases} from './cases'
import {CaseDetails} from './case-details/case-details'

export const CASE_ROUTES : Routes = [

     {
            path: '',
            component: Cases
        },
        {
            path: 'casedetail',
            component: CaseDetails
        }

//   {
//     path: "",
//     component: Cases,
//     children:[
       
//     ]
//   }
]