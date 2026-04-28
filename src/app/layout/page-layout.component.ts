import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteNavbarComponent } from './navbar/site-navbar';
import { SiteFooterComponent } from './footer/site-footer';

@Component({
  selector: 'app-page-layout',
  imports: [
    RouterOutlet,
    SiteNavbarComponent,
    SiteFooterComponent
  ],
  templateUrl: './page-layout.component.html'
})
export class PageLayoutComponent {
}
