import { Injectable, signal } from '@angular/core';

export interface ProyectoInvestigacion {
  titulo: string;
  linea: string;
  coordinador: string;
  descripcion: string;
  estado: 'En Ejecución' | 'Concluido';
}

@Injectable({ providedIn: 'root' })
export class ResearchService {
  private loading = signal(false);

  private lineasList = signal<string[]>([
    'Inteligencia Artificial y Machine Learning',
    'Ingeniería de Software y Sistemas de Información',
    'Ciberseguridad, Redes y Conectividad',
    'Ciencias de la Computación y Big Data'
  ]);

  private proyectosList = signal<ProyectoInvestigacion[]>([
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

  getLineas() {
    return this.lineasList.asReadonly();
  }

  getProyectos() {
    return this.proyectosList.asReadonly();
  }

  isLoading() {
    return this.loading.asReadonly();
  }

  simulateLoad() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 600);
  }
}
