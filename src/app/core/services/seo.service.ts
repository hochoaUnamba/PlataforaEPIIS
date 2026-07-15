import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);

  setPageMeta(config: { title?: string; description: string; image?: string }) {
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }
  }
}
