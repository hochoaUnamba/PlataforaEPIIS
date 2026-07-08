import { Injectable, signal } from '@angular/core';

export interface Laboratorio {
  nombre: string;
  capacidad: number;
  ubicacion: string;
  encargado: string;
  equipos: string[];
  imagen: string;
  estado: 'Operativo' | 'Mantenimiento';
}

@Injectable({ providedIn: 'root' })
export class LaboratoriesService {
  private laboratorios = signal<Laboratorio[]>([
    {
      nombre: 'Laboratorio de Inteligencia Artificial y Robótica',
      capacidad: 25,
      ubicacion: 'Cuarto Piso',
      encargado: 'Dr. Carlos Mendoza Ramos',
      equipos: ['GPUs NVIDIA RTX', 'Kits de Robótica Arduino/Raspberry', 'Estaciones de Trabajo Linux'],
      imagen: 'assets/images/lab-placeholder.svg',
      estado: 'Operativo'
    },
    {
      nombre: 'Laboratorio de Redes y Ciberseguridad',
      capacidad: 30,
      ubicacion: 'Tercer Piso',
      encargado: 'Ing. Jorge Torres Castillo',
      equipos: ['Routers y Switches Cisco v3', 'Servidores de Prueba', 'Racks de Comunicaciones'],
      imagen: 'assets/images/lab-placeholder.svg',
      estado: 'Operativo'
    },
    {
      nombre: 'Laboratorio de Desarrollo de Software Fullstack',
      capacidad: 40,
      ubicacion: 'Segundo Piso',
      encargado: 'Msc. Inés Palomino Silva',
      equipos: ['Monitores Duales', 'Estaciones de Alta Gama Core i7', 'Servidores NAS'],
      imagen: 'assets/images/lab-placeholder.svg',
      estado: 'Mantenimiento'
    }
  ]);

  getLaboratorios() {
    return this.laboratorios.asReadonly();
  }
}
