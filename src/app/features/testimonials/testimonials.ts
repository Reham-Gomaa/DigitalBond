import { Component, inject, OnInit, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
// Primeng
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-testimonials',
  imports: [ButtonModule, CarouselModule, TagModule, NgOptimizedImage],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit {
  private _router = inject(Router);
  isStandalone = signal(this._router.url === '/testimonials');

  reviews = signal<any[]>([]);
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.reviews.set([
      {
        id: '1',
        name: 'Sarah Jenkins',
        position: 'Marketing Director, TechFlow',
        image: './images/about/agency_img5.avif',
        rating: 5,
        comment:
          'Our organic traffic increased by 150% within the first four months. Their SEO strategy is unmatched in the industry.',
      },
      {
        id: '2',
        name: 'Elena Chen',
        position: 'Founder, EcoEats',
        image: './images/hero/agency_img1.avif',
        rating: 4,
        comment:
          'The ROAS we achieved on our social campaigns exceeded all expectations. They truly understand high-intent targeting.',
      },
      {
        id: '3',
        name: 'Marcus Rodriguez',
        position: 'CEO, Bloom Retail',
        image: './images/hero/agency_img2.avif',
        rating: 5,
        comment:
          "Professional, data-driven, and creative. They didn't just run ads; they built a comprehensive brand identity for us.",
      },
      {
        id: '4',
        name: 'Aria Vogel',
        position: 'Operations Manager, SkyLine',
        image: './images/hero/agency_img3.avif',
        rating: 3,
        comment:
          'Great communication and excellent reporting. We always know exactly where our budget is going and what it’s yielding.',
      },
    ]);

    // To keep exactly one review visible, set numVisible to 1 for all breakpoints
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
