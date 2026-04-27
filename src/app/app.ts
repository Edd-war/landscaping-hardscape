import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteNavbarComponent } from './components/site-navbar/site-navbar';
import { SiteHeroComponent } from './components/site-hero/site-hero';
import { SiteMarqueeComponent } from './components/site-marquee/site-marquee';
import { SiteServicesComponent } from './components/site-services/site-services';
import { SiteWhyUsComponent } from './components/site-why-us/site-why-us';
import { SiteGalleryComponent } from './components/site-gallery/site-gallery';
import { SiteContactComponent } from './components/site-contact/site-contact';
import { SiteFooterComponent } from './components/site-footer/site-footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SiteNavbarComponent,
    SiteHeroComponent,
    SiteMarqueeComponent,
    SiteServicesComponent,
    SiteWhyUsComponent,
    SiteGalleryComponent,
    SiteContactComponent,
    SiteFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('landscaping-hardscape');
}
