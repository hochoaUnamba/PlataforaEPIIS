import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { SharedModule, MessageService } from 'primeng/api';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ToastModule, SharedModule, ScrollAnimationDirective],
  providers: [MessageService],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent implements AfterViewInit {
  private seo = inject(SeoService);
  private messageService = inject(MessageService);

  images = Array.from({ length: 8 }, (_, i) => ({
    src: 'assets/images/news-placeholder.svg',
    alt: `Galería EPIIS ${i + 1}`,
    label: `Galería de imágenes EPIIS`
  }));

  ngAfterViewInit() {
    this.seo.setPageMeta({ description: 'Galería de imágenes de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }

  abrirImagen(img: { src: string; alt: string; label: string }) {
    this.messageService.add({ severity: 'info', summary: 'Galería', detail: 'Visualización de imágenes próximamente disponible.', life: 3000 });
  }
}
