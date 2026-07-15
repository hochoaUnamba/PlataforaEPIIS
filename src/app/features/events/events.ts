import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';
import { EventsService } from '../../core/services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule, ScrollAnimationDirective],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class EventsComponent {
  private seo = inject(SeoService);
  private eventsService = inject(EventsService);
  eventos = this.eventsService.getEventos();

  constructor() {
    this.seo.setPageMeta({ description: 'Eventos académicos, talleres y seminarios de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }

  getSeverity(tipo: string): 'info' | 'warn' | 'success' | undefined {
    switch (tipo) {
      case 'Competencia': return 'info';
      case 'Taller': return 'warn';
      case 'Seminario': return 'success';
      default: return undefined;
    }
  }
}
