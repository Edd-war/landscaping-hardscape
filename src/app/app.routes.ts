import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/page-layout.component').then(c => c.PageLayoutComponent),
    loadChildren: () => import('./pages/pages.routes').then(m => m.routes)
  }
];
