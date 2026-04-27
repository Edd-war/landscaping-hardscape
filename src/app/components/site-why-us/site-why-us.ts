import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Point {
  iconClass: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-site-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-why-us.html'
})
export class SiteWhyUsComponent {
  points: Point[] = [
    {
      iconClass: 'pi pi-verified',
      title: 'Quality Work',
      description: 'Every job done right the first time, using premium materials and proven techniques.',
    },
    {
      iconClass: 'pi pi-shield',
      title: 'Reliable Service',
      description: 'We show up on time, communicate clearly, and stand behind every project we complete.',
    },
    {
      iconClass: 'pi pi-clock',
      title: 'Free Estimates',
      description: 'No-obligation, on-site estimates so you know exactly what to expect before we start.',
    },
    {
      iconClass: 'pi pi-thumbs-up',
      title: 'Satisfaction Guaranteed',
      description: "We're not done until you're happy with the result — it's that simple.",
    },
  ];
}
