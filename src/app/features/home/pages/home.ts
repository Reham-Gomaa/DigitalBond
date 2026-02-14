import { Component, inject, OnInit, signal } from '@angular/core';
// Services
import { SeoMetaData } from '../../../core/services/seo/seo-meta-data';
// Components
import { AboutUs } from '../../about-us/about-us';
import { ContactUs } from '../../contact-us/contact-us';
import { Testimonials } from '../../testimonials/testimonials';
import { Hero } from '../components/hero/hero';
import { Services } from '../components/services/services';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutUs, ContactUs, Testimonials, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private _seoMetaData = inject(SeoMetaData);
  bond = signal<any[]>(["Let's Bond"]);

  ngOnInit(): void {
    this._seoMetaData.update(
      'Home',
      'Extract real business value from social media with Digital Bond.',
    );
  }
}
