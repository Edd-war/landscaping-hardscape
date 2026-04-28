import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-site-marquee',
  templateUrl: './site-marquee.html',
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
