import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NewsService } from '../../core/services/news.service';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ButtonModule, ScrollAnimationDirective],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent {
  private newsService = inject(NewsService);
  noticiasList = signal(this.newsService.getNoticias()());
}
