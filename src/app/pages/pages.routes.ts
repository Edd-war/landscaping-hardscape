import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./principal/principal.component').then(c => c.PrincipalComponent),
  }
];
