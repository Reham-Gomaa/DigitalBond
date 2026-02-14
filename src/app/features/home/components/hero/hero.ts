import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
// Primeng
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, ButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
