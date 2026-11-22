import { Component, signal, OnInit, inject } from "@angular/core";
import { RouterOutlet, RouterLink, ActivatedRoute } from "@angular/router";

@Component({
  imports: [],
  selector: "app-about",
  styleUrl: "./about.css",
  templateUrl: "./about.html",
})
export class About implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get("id");
      console.log("API call for this ID:", id);
    });
  }
}
