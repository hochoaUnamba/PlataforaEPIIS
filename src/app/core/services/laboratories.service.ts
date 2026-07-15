import { Injectable, signal } from '@angular/core';

export interface Laboratorio {
  nombre: string;
  descripcion: string;
  equipamiento: string[];
  capacidad: number;
  imagen: string;
  estado: string;
  ubicacion: string;
  encargado: string;
}

@Injectable({ providedIn: 'root' })
export class LaboratoriesService {
  private loading = signal(false);

  private laboratoriosList = signal<Laboratorio[]>([
    {
      nombre: 'Laboratorio de Cómputo I',
      descripcion: 'Equipado con estaciones de trabajo modernas para desarrollo de software y aplicaciones multimedia.',
      equipamiento: ['20 PCs Intel Core i7', 'Monitores 24"', 'Software especializado', 'UPS'],
      capacidad: 20,
      imagen: 'assets/images/lab-placeholder.svg',
      estado: 'Operativo',
      ubicacion: 'Pabellón EPIIS - Piso 1',
      encargado: 'Ing. Luis Torres'
    },
    {
      nombre: 'Laboratorio de Cómputo II',
      descripcion: 'Espacio equipado para prácticas de redes, bases de datos y sistemas operativos.',
      equipamiento: ['25 PCs AMD Ryzen 5', 'Switches Cisco', 'Servidor local', 'Aire acondicionado'],
      capacidad: 25,
      imagen: 'assets/images/lab-placeholder.svg',
      estado: 'Operativo',
      ubicacion: 'Pabellón EPIIS - Piso 2',
      encargado: 'Ing. María López'
    },
    {
      nombre: 'Laboratorio de Robótica',
      descripcion: 'Entorno especializado con kits robóticos, microcontroladores y sensores para proyectos de automatización.',
      equipamiento: ['Kits Arduino', 'Raspberry Pi 4', 'Brazos robóticos', 'Impresora 3D'],
      capacidad: 15,
      imagen: 'assets/images/lab-placeholder.svg',
      estado: 'Mantenimiento',
      ubicacion: 'Pabellón de Ingenierías - Piso 1',
      encargado: 'Ing. Carlos Reyes'
    }
  ]);

  getLaboratorios() {
    return this.laboratoriosList.asReadonly();
  }

  isLoading() {
    return this.loading.asReadonly();
  }

  simulateLoad() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 600);
  }
}
