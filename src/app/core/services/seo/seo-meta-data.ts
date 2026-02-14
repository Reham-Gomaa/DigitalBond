import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoMetaData {
  private meta = inject(Meta);
  private title = inject(Title);
  private readonly siteName = 'Digital Bond';

  update(title: string, description: string): void {
    const fullTitle = title.includes(this.siteName) ? title : `${title} | ${this.siteName}`;

    // Set page title
    this.title.setTitle(fullTitle);

    // Description meta
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
  }
}
