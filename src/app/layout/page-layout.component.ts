import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteNavbarComponent } from './navbar/site-navbar';
import { SiteFooterComponent } from './footer/site-footer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    SiteNavbarComponent,
    SiteFooterComponent
  ],
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
})
export class PageLayoutComponent {
}
