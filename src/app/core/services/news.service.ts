import { Injectable, signal } from '@angular/core';

export interface Noticia {
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  categoria: string;
}

@Injectable({ providedIn: 'root' })
export class NewsService {
  private loading = signal(false);

  private noticiasList = signal<Noticia[]>([
    {
      titulo: 'Conferencia Internacional de IA 2025',
      fecha: '15 Nov 2025',
      resumen: 'Estudiantes de EPIIS participaron en la conferencia internacional con proyectos de Machine Learning.',
      imagen: 'assets/images/news-placeholder.svg',
      categoria: 'Eventos'
    },
    {
      titulo: 'Nuevo Convenio con Empresa TechSolutions',
      fecha: '20 Oct 2025',
      resumen: 'Convenio firmado para pasantías y proyectos colaborativos en desarrollo de software.',
      imagen: 'assets/images/news-placeholder.svg',
      categoria: 'Convenios'
    },
    {
      titulo: 'Semana de la Ingeniería Informática',
      fecha: '5 Oct 2025',
      resumen: 'Talleres, hackathons y charlas magistrales con expertos de la industria.',
      imagen: 'assets/images/news-placeholder.svg',
      categoria: 'Eventos'
    },
    {
      titulo: 'Proyecto de Investigación Ganador',
      fecha: '28 Sep 2025',
      resumen: 'Equipo de EPIIS obtiene primer lugar en concurso nacional de investigación aplicada.',
      imagen: 'assets/images/news-placeholder.svg',
      categoria: 'Logros'
    }
  ]);

  getNoticias() {
    return this.noticiasList.asReadonly();
  }

  isLoading() {
    return this.loading.asReadonly();
  }

  simulateLoad() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 600);
  }
}
