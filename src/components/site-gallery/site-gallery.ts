import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Project } from '@interfaces';


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: 'app-site-gallery',
	templateUrl: './site-gallery.html',
})
export class SiteGalleryComponent {
	public projects: Project[] = [
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
