import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// PrimeNg
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, NgOptimizedImage, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/home' },
      { label: 'About Us', routerLink: '/about' },
      { label: 'Testimonials', routerLink: '/testimonials' },
      { label: 'Contact Us', routerLink: '/contact' },
    ];
  }
}
