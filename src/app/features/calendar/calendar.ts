import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { TagModule } from 'primeng/tag';
import { SeoService } from '../../core/services/seo.service';

interface EventoCalendario {
  fecha: string;
  titulo: string;
  descripcion: string;
  tipo: 'académico' | 'administrativo' | 'social';
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CardModule, ScrollAnimationDirective, TagModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss'
})
export class CalendarComponent implements AfterViewInit {
  private seo = inject(SeoService);

  eventos: EventoCalendario[] = [
    { fecha: '10 Mar 2026', titulo: 'Inicio de Clases Semestre 2026-I', descripcion: 'Inicio del semestre académico para todas las promociones.', tipo: 'académico' },
    { fecha: '15-17 Jul 2026', titulo: 'ABANCAYTEST XXIII', descripcion: 'Competencia regional de programación competitiva.', tipo: 'académico' },
    { fecha: '22-24 Ago 2026', titulo: 'NEUROKUP: Hackatón de IA', descripcion: 'Hackatón de inteligencia artificial y machine learning.', tipo: 'académico' },
    { fecha: '10 Sep 2026', titulo: 'Seminario de Ciberseguridad', descripcion: 'Jornada de conferencias sobre seguridad informática.', tipo: 'académico' },
    { fecha: '28 Nov 2026', titulo: 'Feria de Proyectos EPIIS', descripcion: 'Exposición de proyectos de fin de ciclo.', tipo: 'social' },
    { fecha: '15 Dic 2026', titulo: 'Cierre del Semestre 2026-I', descripcion: 'Finalización de actividades académicas del semestre.', tipo: 'administrativo' }
  ];

  ngAfterViewInit() {
    this.seo.setPageMeta({ description: 'Calendario académico de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }

  getSeverity(tipo: string): 'info' | 'warn' | 'success' | undefined {
    switch (tipo) {
      case 'académico': return 'info';
      case 'administrativo': return 'warn';
      case 'social': return 'success';
      default: return undefined;
    }
  }
}
