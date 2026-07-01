import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

interface Noticia {
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  categoria: 'Académico' | 'Competencia' | 'Comunidad';
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent implements OnInit {
  noticiasList = signal<Noticia[]>([]);

  ngOnInit() {
    this.noticiasList.set([
      {
        titulo: 'Inicio de Año Académico',
        fecha: 'Marzo 2026',
        resumen: 'Damos una cordial bienvenida a toda nuestra comunidad estudiantil y docente al nuevo ciclo de formación en Ingeniería Informática y de Sistemas.',
        imagen: 'https://unsplash.com',
        categoria: 'Académico'
      },
      {
        titulo: '¡Prepárate para el Reto! ABANCAYTEST XXIII Te Espera 💻🏆',
        fecha: 'Junio 2026',
        resumen: 'Desafía tus habilidades algorítmicas y de programación competitiva en el torneo más importante de la región. Inscripciones abiertas para todos los semestres.',
        imagen: 'https://unsplash.com',
        categoria: 'Competencia'
      },
      {
        titulo: 'Desafía tu mente en el NEUROKUP – ¡Conquista la IA!',
        fecha: 'Julio 2026',
        resumen: 'Participa en el taller y hackatón enfocado en el desarrollo de agentes inteligentes, redes neuronales y extracción de conocimiento.',
        imagen: 'https://unsplash.com',
        categoria: 'Competencia'
      }
    ]);
  }
}
