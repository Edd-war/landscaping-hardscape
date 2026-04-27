import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

interface Social {
  iconClass: string;
  label: string;
  handle: string;
  href: string;
}

@Component({
  selector: 'app-site-contact',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './site-contact.html'
})
export class SiteContactComponent {
  socials: Social[] = [
    {
      iconClass: 'pi pi-instagram',
      label: 'Instagram',
      handle: '@cclandscapinghardscape',
      href: 'https://instagram.com/cclandscapinghardscape',
    },
    {
      iconClass: 'pi pi-tiktok',
      label: 'TikTok',
      handle: 'C&C landscaping/hardscape',
      href: 'https://www.tiktok.com/@cclandscapinghardscape',
    },
    {
      iconClass: 'pi pi-facebook',
      label: 'Facebook',
      handle: 'C&C landscaping/Hardscape',
      href: 'https://facebook.com/cclandscapinghardscape',
    },
  ];
}
