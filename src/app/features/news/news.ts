import { Component, signal, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SharedModule, MessageService } from 'primeng/api';
import { NewsService, Noticia } from '../../core/services/news.service';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ButtonModule, ToastModule, SharedModule, ScrollAnimationDirective],
  providers: [MessageService],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent implements AfterViewInit {
  private seo = inject(SeoService);
  private newsService = inject(NewsService);
  private messageService = inject(MessageService);
  noticiasList = signal(this.newsService.getNoticias()());
  loading = this.newsService.isLoading();

  ngAfterViewInit() {
    this.seo.setPageMeta({ description: 'Noticias y novedades de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }

  leerNoticia(noticia: Noticia) {
    this.messageService.add({ severity: 'info', summary: 'Noticia', detail: `Detalle de "${noticia.titulo}" próximamente disponible.`, life: 3000 });
  }
}
