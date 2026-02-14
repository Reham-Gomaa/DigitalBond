import { Component, inject, OnInit, signal } from '@angular/core';
// Primeng
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-services',
  imports: [ButtonModule, CarouselModule, TagModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = signal<any[]>([
    { id: '1', name: 'Social Media' },
    { id: '2', name: 'Web Development' },
    { id: '3', name: 'Mobile Apps' },
    { id: '4', name: 'Influence Marketing' },
    { id: '5', name: 'SEO Optimization' },
    { id: '6', name: 'Media Production' },
    { id: '7', name: 'SMS Camaigns' },
  ]);
}
