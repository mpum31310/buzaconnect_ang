import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common'; 

@Component({
  imports: [DatePipe],
  selector: "app-details",
  styleUrl: "./case-details.css",
  templateUrl: "./case-details.html",
})
export class CaseDetails implements OnInit {
  private activatedLink = inject(ActivatedRoute);

  case = {
    title: 'car crash',
     author:"MpumeleloAdminaaa",
     submissiondate: new Date('2010-10-01'),
     status: 'PENDING',
     law_category: 'Criminal',
     region: 'Gauteng',
     incident_date:new Date('2026-02-01'),
     applicant: 'Mome',
     respondent: 'Mpu',
     consent:'Yes',
     case_detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  }

  ngOnInit() {
    this.activatedLink.paramMap.subscribe((param) => {
      const id = param.get("id");
      console.log("this is: ", id);
    });
  }
}
