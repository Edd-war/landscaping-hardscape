import { Component } from '@angular/core';

@Component({
  selector: 'app-site-hero',
  imports: [],
  templateUrl: './site-hero.html'
})
export class SiteHeroComponent {
  features = [
    'Licensed Professionals',
    'Free On-Site Estimates',
    'Quality Materials',
    'Reliable Service',
  ];
}
