import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { SeoMetaData } from '../../core/services/seo/seo-meta-data';
// Primeng
import { ButtonModule } from 'primeng/button';

type Errors = {
  required?: boolean;
  minLength?: boolean;
  email?: boolean;
  pattern?: boolean;
};

@Component({
  selector: 'app-contact-us',
  imports: [NgOptimizedImage, ButtonModule, FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs implements OnInit {
  private _seoMetaData = inject(SeoMetaData);
  private _router = inject(Router);
  isStandalone = signal(this._router.url === '/contact');

  ngOnInit(): void {
    this._seoMetaData.update(
      'Contact Us',
      'Connect with Digital Bond. Call us for support or inquiries about our services.',
    );
  }

  name = signal('');
  email = signal('');
  phone = signal('');
  website = signal('');

  nameTouched = signal(false);
  emailTouched = signal(false);
  phoneTouched = signal(false);
  websiteTouched = signal(false);

  nameErrors = computed(() => ({
    required: !this.name().trim(),
    pattern: !/^[A-Za-z][A-Za-z\s'-]{2,}$/.test(this.name()),
    invalidFormat: this.name().trim() && !/^[A-Za-z][A-Za-z\s'-]{2,}$/.test(this.name()),
  }));

  emailErrors = computed(() => ({
    required: !this.email().trim(),
    pattern: !/^[^\s@]+@[^\s@]+\.[A-Za-z]{3,}$/.test(this.email()),
  }));

  phoneErrors = computed<Errors>(() => ({
    required: !this.phone().trim(),
    pattern: !/^\d{8,}$/.test(this.phone()),
  }));

  websiteErrors = computed<Errors>(() => ({
    required: !this.website().trim(),
    pattern: !/^https?:\/\/.+/.test(this.website()),
  }));

  nameValid = computed(() => !Object.values(this.nameErrors()).includes(true));
  emailValid = computed(() => !Object.values(this.emailErrors()).includes(true));
  phoneValid = computed(() => !Object.values(this.phoneErrors()).includes(true));
  websiteValid = computed(() => !Object.values(this.websiteErrors()).includes(true));

  formValid = computed(
    () => this.nameValid() && this.emailValid() && this.phoneValid() && this.websiteValid(),
  );

  submit(event: Event) {
    event.preventDefault();
    if (!this.formValid()) return;

    // Save/Log the data
    console.log({
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
      website: this.website(),
    });

    // Clear inputs
    this.name.set('');
    this.email.set('');
    this.phone.set('');
    this.website.set('');

    // Reset touched state to prevent showing validation errors on empty form
    this.nameTouched.set(false);
    this.emailTouched.set(false);
    this.phoneTouched.set(false);
    this.websiteTouched.set(false);
  }
}
