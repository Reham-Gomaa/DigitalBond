import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  {
    path: 'about',
    loadComponent: () => import('./features/about-us/about-us').then((c) => c.AboutUs),
    title: 'About Us',
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./features/testimonials/testimonials').then((c) => c.Testimonials),
    title: 'Testimonials',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact-us/contact-us').then((c) => c.ContactUs),
    title: 'Contact Us',
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((c) => c.NotFound),
    title: 'Not Found',
  },
];
