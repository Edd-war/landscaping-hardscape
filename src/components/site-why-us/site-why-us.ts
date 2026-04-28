import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faBadgeCheck,
	faShieldCheck,
	faClock,
	faThumbsUp
} from '@fortawesome/pro-regular-svg-icons';

import { Point } from '@interfaces';


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FontAwesomeModule],
	selector: 'app-site-why-us',
	templateUrl: './site-why-us.html',
})
export class SiteWhyUsComponent {
	public readonly faBadgeCheck: IconDefinition = faBadgeCheck;
	public readonly faShieldCheck: IconDefinition = faShieldCheck;
	public readonly faClock: IconDefinition = faClock;
	public readonly faThumbsUp: IconDefinition = faThumbsUp;

	public readonly points: Point[] = [
		{
			icon: this.faBadgeCheck,
			title: 'Quality Work',
			description: 'Every job done right the first time, using premium materials and proven techniques.',
		},
		{
			icon: faShieldCheck,
			title: 'Reliable Service',
			description: 'We show up on time, communicate clearly, and stand behind every project we complete.',
		},
		{
			icon: faClock,
			title: 'Free Estimates',
			description: 'No-obligation, on-site estimates so you know exactly what to expect before we start.',
		},
		{
			icon: faThumbsUp,
			title: 'Satisfaction Guaranteed',
			description: "We're not done until you're happy with the result — it's that simple.",
		},
	];
}
