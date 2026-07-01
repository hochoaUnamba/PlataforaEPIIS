import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface ProyectoInvestigacion {
  titulo: string;
  linea: string;
  coordinador: string;
  descripcion: string;
  estado: 'En Ejecución' | 'Concluido';
}

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule],
  templateUrl: './research.html',
  styleUrl: './research.scss'
})
export class ResearchComponent implements OnInit {
  lineasInvestigacion = signal<string[]>([]);
  proyectos = signal<ProyectoInvestigacion[]>([]);

  ngOnInit() {
    // Líneas oficiales basadas en las competencias académicas de EPIIS
    this.lineasInvestigacion.set([
      'Inteligencia Artificial y Machine Learning',
      'Ingeniería de Software y Sistemas de Información',
      'Ciberseguridad, Redes y Conectividad',
      'Ciencias de la Computación y Big Data'
    ]);

    // Proyectos simulados
    this.proyectos.set([
      {
        titulo: 'Aplicación de Algoritmos de Visión Artificial para la Detección de Plagas Regionales',
        linea: 'Inteligencia Artificial y Machine Learning',
        coordinador: 'Dr. Carlos Mendoza Ramos',
        descripcion: 'Desarrollo de un sistema basado en redes neuronales convolucionales para identificar de forma temprana anomalías en cultivos utilizando imágenes de drones.',
        estado: 'En Ejecución'
      },
      {
        titulo: 'Optimización de Procesos de Transformación Digital en las Mypes de la Región',
        linea: 'Ingeniería de Software y Sistemas de Información',
        coordinador: 'Msc. Inés Palomino Silva',
        descripcion: 'Estudio e implementación de arquitecturas cloud nativas y microservicios para la modernización de los sistemas transaccionales locales.',
        estado: 'Concluido'
      }
    ]);
  }
}
