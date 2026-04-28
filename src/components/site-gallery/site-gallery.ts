import { Component } from '@angular/core';

interface Project {
  src: string;
  title: string;
  tag: string;
}

@Component({
  selector: 'app-site-gallery',
  standalone: true,
  templateUrl: './site-gallery.html'
})
export class SiteGalleryComponent {
  projects: Project[] = [
    {
      src: '/images/pavers.jpg',
      title: 'Custom Paver Patios',
      tag: 'Hardscape',
    },
    {
      src: '/images/artificial-turf.jpg',
      title: 'Premium Artificial Turf',
      tag: 'Landscape',
    },
    {
      src: '/images/concrete-work.jpg',
      title: 'Concrete Driveways',
      tag: 'Hardscape',
    },
    {
      src: '/images/gravel-irrigation.jpg',
      title: 'Gravel & Irrigation',
      tag: 'Landscape',
    },
    {
      src: '/images/tree-trimming.jpg',
      title: 'Tree Trimming & Clean Ups',
      tag: 'Maintenance',
    },
    {
      src: '/images/hero-landscaping.jpg',
      title: 'Full Yard Transformations',
      tag: 'Featured',
    },
  ];
}
