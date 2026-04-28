import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faPhone, faComment } from '@fortawesome/pro-regular-svg-icons';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FontAwesomeModule],
	selector: 'app-site-hero',
	templateUrl: './site-hero.html',
})
export class SiteHeroComponent {
	public faCheckCircle: IconDefinition = faCheckCircle;
	public faPhone: IconDefinition = faPhone;
	public faComment: IconDefinition = faComment;

	public features: string[] = [
		'Licensed Professionals',
		'Free On-Site Estimates',
		'Quality Materials',
		'Reliable Service',
	];
}
