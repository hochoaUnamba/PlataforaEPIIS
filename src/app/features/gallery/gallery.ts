import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent implements AfterViewInit {
  private seo = inject(SeoService);

  images = Array.from({ length: 8 }, (_, i) => ({
    src: 'assets/images/news-placeholder.svg',
    alt: `Galería EPIIS ${i + 1}`,
    label: `Galería de imágenes EPIIS`
  }));

  ngAfterViewInit() {
    this.seo.setPageMeta({ description: 'Galería de imágenes de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }
}
