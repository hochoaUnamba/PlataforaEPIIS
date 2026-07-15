import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SharedModule, MessageService } from 'primeng/api';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';
import { EventsService, Evento } from '../../core/services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule, ToastModule, SharedModule, ScrollAnimationDirective],
  providers: [MessageService],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class EventsComponent {
  private seo = inject(SeoService);
  private eventsService = inject(EventsService);
  private messageService = inject(MessageService);
  eventos = this.eventsService.getEventos();
  loading = this.eventsService.isLoading();

  constructor() {
    this.seo.setPageMeta({ description: 'Eventos académicos, talleres y seminarios de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }

  getSeverity(tipo: string): 'info' | 'warn' | 'success' | 'danger' | undefined {
    switch (tipo) {
      case 'Competencia': return 'info';
      case 'Taller': return 'warn';
      case 'Seminario': return 'success';
      case 'Académico': return 'danger';
      default: return undefined;
    }
  }

  masInformacion(ev: Evento) {
    this.messageService.add({ severity: 'info', summary: 'Evento', detail: `Detalles de "${ev.titulo}" próximamente disponibles.`, life: 3000 });
  }
}
