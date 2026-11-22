import { Component, signal, OnInit, inject } from "@angular/core";
import {
  RouterOutlet,
  RouterLink,
  ActivatedRoute,
  Router,
} from "@angular/router";

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: "app-root",
  styleUrl: "./app.css",
  templateUrl: "./app.html",
})
export class App implements OnInit {
  private router = inject(Router);
  private activatedroute = inject(ActivatedRoute);

  loginuser = "loggedin user";

  gettingParam(id: number) {
    this.router.navigate(["param/", id]);
  }

  ngOnInit() {
    this.activatedroute.queryParamMap.subscribe((params) => {
      const query = params.get("name");
      console.log(query);
    });
  }
}
