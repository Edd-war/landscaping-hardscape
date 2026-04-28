import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'app-site-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './site-navbar.html'
})
export class SiteNavbarComponent {
  open = false;
  
  links: NavLink[] = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  toggleMenu() {
    this.open = !this.open;
  }

  closeMenu() {
    this.open = false;
  }
}
