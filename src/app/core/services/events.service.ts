import { Injectable, signal } from '@angular/core';

export interface Evento {
  titulo: string;
  tipo: string;
  fecha: string;
  descripcion: string;
  lugar: string;
  icono: string;
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  private loading = signal(false);

  private eventosList = signal<Evento[]>([
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
  ]);

  getEventos() {
    return this.eventosList.asReadonly();
  }

  isLoading() {
    return this.loading.asReadonly();
  }

  simulateLoad() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 600);
  }
}
