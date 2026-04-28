import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faPhone } from '@fortawesome/pro-regular-svg-icons';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FontAwesomeModule],
	selector: 'app-site-footer',
	templateUrl: './site-footer.html',
})
export class SiteFooterComponent {
	public faPhone: IconDefinition = faPhone;
	public faInstagram: IconDefinition = faInstagram;
	public faTiktok: IconDefinition = faTiktok;
	public faFacebook: IconDefinition = faFacebook;

	public currentYear: number = new Date().getFullYear();
}
