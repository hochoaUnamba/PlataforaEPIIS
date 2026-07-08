import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule, ScrollAnimationDirective],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class EventsComponent {
  eventos = [
    {
      titulo: 'ABANCAYTEST XXIII',
      tipo: 'Competencia',
      fecha: '15 - 17 Julio 2026',
      descripcion: 'Torneo regional de programación competitiva. Desafía tus habilidades algorítmicas y resuelve problemas del mundo real.',
      lugar: 'Laboratorio de Cómputo - Pabellón EPIIS',
      icono: 'pi pi-code'
    },
    {
      titulo: 'NEUROKUP: Hackatón de IA',
      tipo: 'Taller',
      fecha: '22 - 24 Agosto 2026',
      descripcion: 'Hackatón enfocado en desarrollo de agentes inteligentes, redes neuronales y extracción de conocimiento con datos abiertos.',
      lugar: 'Auditorio UNAMBA',
      icono: 'pi pi-cog'
    },
    {
      titulo: 'Seminario de Ciberseguridad',
      tipo: 'Seminario',
      fecha: '10 Setiembre 2026',
      descripcion: 'Jornada de conferencias sobre seguridad informática, ethical hacking y protección de datos en la era digital.',
      lugar: 'Centro de Innovación - UNAMBA',
      icono: 'pi pi-shield'
    },
    {
      titulo: 'Feria de Proyectos EPIIS',
      tipo: 'Académico',
      fecha: '28 Noviembre 2026',
      descripcion: 'Exposición de proyectos de fin de ciclo. Estudiantes presentan sus soluciones tecnológicas innovadoras a la comunidad.',
      lugar: 'Patio Principal - Pabellón EPIIS',
      icono: 'pi pi-th-large'
    }
  ];

  getSeverity(tipo: string): 'info' | 'warn' | 'success' | undefined {
    switch (tipo) {
      case 'Competencia': return 'info';
      case 'Taller': return 'warn';
      case 'Seminario': return 'success';
      default: return undefined;
    }
  }
}
