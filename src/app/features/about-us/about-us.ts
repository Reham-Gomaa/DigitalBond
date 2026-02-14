import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
// Primeng
import { ButtonModule } from 'primeng/button';
import { BtnTrans } from '../../shared/ui/btn-trans/btn-trans';

@Component({
  selector: 'app-about-us',
  imports: [NgOptimizedImage, ButtonModule, BtnTrans],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {}
