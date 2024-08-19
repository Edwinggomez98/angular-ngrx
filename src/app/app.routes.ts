import { Routes } from '@angular/router';
import { LandingComponent } from './public/landing/landing.component';

export const routes: Routes = [
  {
    path: '**',
    component: LandingComponent,
  },
];
