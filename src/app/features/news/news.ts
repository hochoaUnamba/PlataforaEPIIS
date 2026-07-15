import { Component, signal, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NewsService } from '../../core/services/news.service';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ButtonModule, ScrollAnimationDirective],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent implements AfterViewInit {
  private seo = inject(SeoService);
  private newsService = inject(NewsService);
  noticiasList = signal(this.newsService.getNoticias()());

  ngAfterViewInit() {
    this.seo.setPageMeta({ description: 'Noticias y novedades de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }
}
