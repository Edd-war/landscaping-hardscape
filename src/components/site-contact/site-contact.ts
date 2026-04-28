import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faComment } from '@fortawesome/pro-regular-svg-icons';
import { Social } from '@interfaces';


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FontAwesomeModule],
	selector: 'app-site-contact',
	templateUrl: './site-contact.html',
})
export class SiteContactComponent {
	public faPhone: IconDefinition = faPhone;
	public faComment: IconDefinition = faComment;

	public readonly socials: Social[] = [
		{
			icon: faInstagram,
			label: 'Instagram',
			handle: '@cclandscapinghardscape',
			href: 'https://instagram.com/cclandscapinghardscape',
		},
		{
			icon: faTiktok,
			label: 'TikTok',
			handle: 'C&C landscaping/hardscape',
			href: 'https://www.tiktok.com/@cclandscapinghardscape',
		},
		{
			icon: faFacebook,
			label: 'Facebook',
			handle: 'C&C landscaping/Hardscape',
			href: 'https://facebook.com/cclandscapinghardscape',
		},
	];
}
