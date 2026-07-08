import { Injectable, signal } from '@angular/core';

export interface Noticia {
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  categoria: 'Académico' | 'Competencia' | 'Comunidad';
}

@Injectable({ providedIn: 'root' })
export class NewsService {
  private noticiasList = signal<Noticia[]>([
    {
      titulo: 'Inicio de Año Académico',
      fecha: 'Marzo 2026',
      resumen: 'Damos una cordial bienvenida a toda nuestra comunidad estudiantil y docente al nuevo ciclo de formación en Ingeniería Informática y de Sistemas.',
      imagen: 'assets/images/news-placeholder.svg',
      categoria: 'Académico'
    },
    {
      titulo: 'ABANCAYTEST XXIII Te Espera',
      fecha: 'Junio 2026',
      resumen: 'Desafía tus habilidades algorítmicas y de programación competitiva en el torneo más importante de la región. Inscripciones abiertas para todos los semestres.',
      imagen: 'assets/images/news-placeholder.svg',
      categoria: 'Competencia'
    },
    {
      titulo: 'NEUROKUP – Conquista la IA',
      fecha: 'Julio 2026',
      resumen: 'Participa en el taller y hackatón enfocado en el desarrollo de agentes inteligentes, redes neuronales y extracción de conocimiento.',
      imagen: 'assets/images/news-placeholder.svg',
      categoria: 'Competencia'
    }
  ]);

  getNoticias() {
    return this.noticiasList.asReadonly();
  }
}
