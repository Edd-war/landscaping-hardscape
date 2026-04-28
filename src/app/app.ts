import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		RouterOutlet
	],
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	private titleService = inject(Title);
	private metaService = inject(Meta);

	constructor() {
		this.updateMetaTags();
	}

	public updateMetaTags(): void {
		this.titleService.setTitle('C&C Landscaping & Hardscape LLC | Professional Landscaping & Pavers in Phoenix');
		
		this.metaService.updateTag({ name: 'description', content: 'C&C Landscaping & Hardscape LLC – Professional landscaping services in Phoenix, AZ. Specializing in artificial turf, pavers, irrigation, tree trimming, and concrete work. Free estimates available.' });
		this.metaService.updateTag({ name: 'keywords', content: 'landscaping, hardscape, artificial turf, pavers, irrigation, tree trimming, concrete work, Phoenix AZ, C&C Landscaping, yard transformation' });
		this.metaService.updateTag({ name: 'author', content: 'C&C Landscaping & Hardscape LLC' });
		this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
		this.metaService.updateTag({ name: 'theme-color', content: '#0d1117' });
		this.metaService.updateTag({ name: 'format-detection', content: 'telephone=no' });

		// Geo Tags (Local SEO)
		this.metaService.updateTag({ name: 'geo.region', content: 'US-AZ' });
		this.metaService.updateTag({ name: 'geo.placename', content: 'Phoenix' });
		this.metaService.updateTag({ name: 'geo.position', content: '33.4484;-112.0740' });
		this.metaService.updateTag({ name: 'ICBM', content: '33.4484, -112.0740' });

		// Open Graph
		this.metaService.updateTag({ property: 'og:type', content: 'website' });
		this.metaService.updateTag({ property: 'og:site_name', content: 'C&C Landscaping & Hardscape LLC' });
		this.metaService.updateTag({ property: 'og:title', content: 'C&C Landscaping & Hardscape LLC | Premium Yard Transformations' });
		this.metaService.updateTag({ property: 'og:description', content: 'Professional landscaping & hardscape in Phoenix. Artificial turf, pavers, irrigation & more. Quality work, reliable service.' });
		this.metaService.updateTag({ property: 'og:url', content: 'https://landscapinghardscape.com/' });
		this.metaService.updateTag({ property: 'og:image', content: 'https://landscapinghardscape.com/images/preview.png' });
		this.metaService.updateTag({ property: 'og:image:secure_url', content: 'https://landscapinghardscape.com/images/preview.png' });
		this.metaService.updateTag({ property: 'og:image:type', content: 'image/png' });
		this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
		this.metaService.updateTag({ property: 'og:image:height', content: '630' });
		this.metaService.updateTag({ property: 'og:image:alt', content: 'C&C Landscaping & Hardscape Professional Work Preview' });
		this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });

		// Twitter
		this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
		this.metaService.updateTag({ name: 'twitter:title', content: 'C&C Landscaping & Hardscape LLC | Professional Landscaping' });
		this.metaService.updateTag({ name: 'twitter:description', content: 'Professional landscaping & hardscape in Phoenix. Artificial turf, pavers, irrigation & more. Free estimates!' });
		this.metaService.updateTag({ name: 'twitter:image', content: 'https://landscapinghardscape.com/images/preview.png' });
		this.metaService.updateTag({ name: 'twitter:image:alt', content: 'C&C Landscaping & Hardscape Professional Work Preview' });

		// Apple
		this.metaService.updateTag({ name: 'apple-mobile-web-app-title', content: 'C&C Landscaping' });
		this.metaService.updateTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
		this.metaService.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' });
	}
}
