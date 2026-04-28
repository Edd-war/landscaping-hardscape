import { Component } from '@angular/core';

@Component({
  selector: 'app-site-marquee',
  standalone: true,
  templateUrl: './site-marquee.html'
})
export class SiteMarqueeComponent {
  items: string[] = [
    'Artificial Turf',
    'Pavers',
    'Gravel',
    'Irrigation',
    'Clean Ups',
    'Tree Trimming',
    'Concrete Work',
    'Free Estimates',
  ];
}
