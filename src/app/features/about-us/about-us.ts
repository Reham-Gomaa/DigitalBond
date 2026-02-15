import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
// Primeng
import { ButtonModule } from 'primeng/button';
import { BtnTrans } from '../../shared/ui/btn-trans/btn-trans';

@Component({
  selector: 'app-about-us',
  imports: [NgOptimizedImage, ButtonModule, BtnTrans],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  private _router = inject(Router);
  isStandalone = signal(this._router.url === '/about');
}
