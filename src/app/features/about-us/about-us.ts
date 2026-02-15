import { Component, inject, OnInit, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
// Services
import { SeoMetaData } from '../../core/services/seo/seo-meta-data';
// Primeng
import { ButtonModule } from 'primeng/button';
import { BtnTrans } from '../../shared/ui/btn-trans/btn-trans';

@Component({
  selector: 'app-about-us',
  imports: [NgOptimizedImage, ButtonModule, BtnTrans],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs implements OnInit {
  private _seoMetaData = inject(SeoMetaData);
  private _router = inject(Router);
  isStandalone = signal(this._router.url === '/about');

  ngOnInit(): void {
    this._seoMetaData.update(
      'About Us',
      'Meet the Digital Bond team. We are a blend of creative experts committed to delivering outstanding digital marketing services.',
    );
  }
}
