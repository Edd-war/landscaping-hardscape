import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SiteHeroComponent } from '../../../components/site-hero/site-hero';
import { SiteMarqueeComponent } from '../../../components/site-marquee/site-marquee';
import { SiteServicesComponent } from '../../../components/site-services/site-services';
import { SiteWhyUsComponent } from '../../../components/site-why-us/site-why-us';
import { SiteGalleryComponent } from '../../../components/site-gallery/site-gallery';
import { SiteContactComponent } from '../../../components/site-contact/site-contact';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeroComponent,
    SiteMarqueeComponent,
    SiteServicesComponent,
    SiteGalleryComponent,
    SiteWhyUsComponent,
    SiteContactComponent
  ],
  selector: 'app-principal',
  templateUrl: './principal.component.html',
})
export class PrincipalComponent {
}
