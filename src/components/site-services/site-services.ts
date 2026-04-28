import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faTreeDeciduous,
	faRoadBarrier,
	faMountains,
	faDroplet,
	faSparkles,
	faScissors,
	faHammer
} from '@fortawesome/pro-regular-svg-icons';

import { Service } from '@interfaces';


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FontAwesomeModule],
	selector: 'app-site-services',
	templateUrl: './site-services.html',
})
export class SiteServicesComponent {
	services: Service[] = [
		{
			icon: faTreeDeciduous,
			title: 'Artificial Turf',
			description: 'Premium synthetic grass installations that stay green year-round with zero mowing or watering.',
		},
		{
			icon: faRoadBarrier,
			title: 'Pavers',
			description: 'Custom paver patios, walkways, and driveways built to last with precision installation.',
		},
		{
			icon: faMountains,
			title: 'Gravel',
			description: 'Decorative and functional gravel landscaping in a variety of colors, sizes, and styles.',
		},
		{
			icon: faDroplet,
			title: 'Irrigation',
			description: 'Smart irrigation systems and drip lines that keep your landscape healthy and water-efficient.',
		},
		{
			icon: faSparkles,
			title: 'Clean Ups',
			description: 'Full yard clean ups, debris removal, and seasonal maintenance to keep your property pristine.',
		},
		{
			icon: faScissors,
			title: 'Tree Trimming',
			description: 'Safe, professional tree trimming and pruning to keep your landscape healthy and beautiful.',
		},
		{
			icon: faHammer,
			title: 'Concrete Work',
			description: 'Driveways, walkways, slabs, and decorative concrete poured and finished to perfection.',
		},
	];
}
