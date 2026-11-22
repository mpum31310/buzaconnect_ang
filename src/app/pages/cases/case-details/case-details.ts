import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  imports: [],
  selector: "app-details",
  styleUrl: "./case-details.css",
  templateUrl: "./case-details.html",
})
export class CaseDetails implements OnInit {
  private activatedLink = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedLink.paramMap.subscribe((param) => {
      const id = param.get("id");
      console.log("this is: ", id);
    });
  }
}
