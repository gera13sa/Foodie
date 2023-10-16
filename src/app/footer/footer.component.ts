import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  isErrorPage: boolean = false;
  bannerState: boolean = true;

  ngOnInit() {
    const localBannerState = localStorage.getItem('Banner');

    if (localBannerState === 'closed') {
      this.bannerState = false;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isErrorPage =
          this.activeRouter.snapshot.firstChild?.routeConfig?.path === '404' ||
          this.activeRouter.snapshot.firstChild?.routeConfig?.path === '401';
      }
    });
  }

  removeBanner() {
    localStorage.setItem('Banner', 'closed');
    this.bannerState = false;
  }
}
