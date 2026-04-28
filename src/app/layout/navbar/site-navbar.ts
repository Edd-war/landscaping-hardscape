import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faTimes, faBars, IconDefinition } from '@fortawesome/pro-regular-svg-icons';

import { NavLink } from '@interfaces';


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FontAwesomeModule],
	selector: 'app-site-navbar',
	templateUrl: './site-navbar.html',
})
export class SiteNavbarComponent {
	public faPhone: IconDefinition = faPhone;
	public faTimes: IconDefinition = faTimes;
	public faBars: IconDefinition = faBars;

	public open: boolean = false;

	public links: NavLink[] = [
		{ href: '#services', label: 'Services' },
		{ href: '#gallery', label: 'Gallery' },
		{ href: '#why-us', label: 'Why Us' },
		{ href: '#contact', label: 'Contact' },
	];

	public toggleMenu(): void {
		this.open = !this.open;
	}

	public closeMenu(): void {
		this.open = false;
	}
}
