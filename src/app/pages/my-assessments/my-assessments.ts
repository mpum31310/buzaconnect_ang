import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'; 
import {    RouterLink,   ActivatedRoute,  Router, } from '@angular/router';


@Component({
  imports: [RouterLink,DatePipe],
  selector: 'app-my-assessments',
  styleUrl: './my-assessments.css',
  templateUrl: './my-assessments.html',
})
export class MyAssessments {

  cases = [
  {
    id: 1,
    case_title: 'Stole',
    area_of_law: 'criminal',
    submission_date: new Date('2000-10-01'),
    assigned_to: 'mpumelelo',
    status: 'pending'
  },
   {
    id: 2,
    case_title: 'RAF',
    area_of_law: 'Civil',
    submission_date: new Date('2020-10-10'),
    assigned_to: 'Sisa',
    status: 'pending'
  }
];
}
