import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router'

import { DatePipe } from '@angular/common'; 

@Component({
  imports: [RouterLink,DatePipe],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {

    user = {
      usertype: 'Normal',
      email:'mpumelelo@gmail.com',
      name: 'Mpumelelo',
      dateSignup: new Date('2026-02-01'),
    }

    case = {
      id:12,
    title: 'Car Crash',
     author:"MpumeleloAdminaaa",
     submissiondate: new Date('2010-10-01'),
     status: 'PENDING',
     law_category: ' Damages - Claims for damages(Injury, negligence, Defamation, ect.).',
     region: 'Gauteng',
     incident_date:new Date('2026-02-01'),
     applicant: 'Mome',
     respondent: 'Mpu',
     consent:'Yes',
     case_detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  }
}
