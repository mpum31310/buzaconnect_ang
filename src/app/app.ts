// import { Component, signal, OnInit, inject } from "@angular/core";
// import {
//   RouterOutlet,
//   RouterLink,
//   ActivatedRoute,
//   Router,
// } from "@angular/router";

// @Component({
//   imports: [RouterOutlet, RouterLink],
//   selector: "app-root",
//   styleUrl: "./app.css",
//   templateUrl: "./app.html",
// })
// export class App implements OnInit {
//   private router = inject(Router);
//   private activatedroute = inject(ActivatedRoute);

//   loginuser = "loggedin user";

//   gettingParam(id: number) {
//     this.router.navigate(["param/", id]);
//   }

//   ngOnInit() {
//     this.activatedroute.queryParamMap.subscribe((params) => {
//       const query = params.get("name");
//       console.log(query);
//     });
//   }
// }


import { Component, ChangeDetectorRef, HostListener, ElementRef,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterOutlet,  RouterLink,   ActivatedRoute,  Router, } from '@angular/router';

@Component({
  selector: 'app-root', // or your root component selector
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet],
  templateUrl: './app.html'
})
export class App {
    private router = inject(Router);
  private activatedroute = inject(ActivatedRoute);

  // loginuser = "loggedin user";

  gettingParam(id: number) {
    this.router.navigate(["param/", id]);
  }

  ngOnInit() {
    this.activatedroute.queryParamMap.subscribe((params) => {
      const query = params.get("name");
      console.log(query);
    });
  }
  loginuser = 'User'; // Bind to your auth/user state
  openDropdown: 'cases' | 'profile' | 'toolkit' | null = null;
  mobileSection: 'cases' | 'profile' | 'toolkit' | null = null;
  isMobileMenuOpen = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef
  ) {}

  toggleDropdown(menu: 'cases' | 'profile' | 'toolkit'): void {
    this.openDropdown = this.openDropdown === menu ? null : menu;
    this.cdr.detectChanges();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.mobileSection = null;
    }
    this.cdr.detectChanges();
  }

  toggleMobileSection(section: 'cases' | 'profile' | 'toolkit'): void {
    this.mobileSection = this.mobileSection === section ? null : section;
    this.cdr.detectChanges();
  }

  closeAllMenus(): void {
    this.openDropdown = null;
    this.mobileSection = null;
    this.isMobileMenuOpen = false;
    this.cdr.detectChanges();
  }

  unsubscribe(): void {
    this.closeAllMenus();
    // Add your unsubscribe API call here
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.openDropdown = null;
      this.cdr.detectChanges();
    }
  }
}