import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  iconClass: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-site-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-services.html'
})
export class SiteServicesComponent {
  services: Service[] = [
    {
      iconClass: 'pi pi-image',
      title: 'Artificial Turf',
      description: 'Premium synthetic grass installations that stay green year-round with zero mowing or watering.',
    },
    {
      iconClass: 'pi pi-table',
      title: 'Pavers',
      description: 'Custom paver patios, walkways, and driveways built to last with precision installation.',
    },
    {
      iconClass: 'pi pi-clone',
      title: 'Gravel',
      description: 'Decorative and functional gravel landscaping in a variety of colors, sizes, and styles.',
    },
    {
      iconClass: 'pi pi-cloud',
      title: 'Irrigation',
      description: 'Smart irrigation systems and drip lines that keep your landscape healthy and water-efficient.',
    },
    {
      iconClass: 'pi pi-star',
      title: 'Clean Ups',
      description: 'Full yard clean ups, debris removal, and seasonal maintenance to keep your property pristine.',
    },
    {
      iconClass: 'pi pi-scissors', // pi-scissors sometimes works, or we fallback
      title: 'Tree Trimming',
      description: 'Safe, professional tree trimming and pruning to keep your landscape healthy and beautiful.',
    },
    {
      iconClass: 'pi pi-wrench',
      title: 'Concrete Work',
      description: 'Driveways, walkways, slabs, and decorative concrete poured and finished to perfection.',
    },
  ];
}
