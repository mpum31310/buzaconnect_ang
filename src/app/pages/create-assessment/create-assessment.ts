import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: "app-create-assessment",
  styleUrl: "./create-assessment.css",
  templateUrl: "./create-assessment.html",
})
export class CreateAssessment {
  submitcase() {
    console.log("HTTP call to API done ");
    console.log("Response from API recieved");
    console.log("your case has been logged ");
  }
}
