import { Injectable, signal } from '@angular/core';

export interface Docente {
  nombre: string;
  grado: string;
  especialidad: string;
  correo: string;
  imagen: string;
}

@Injectable({ providedIn: 'root' })
export class TeachersService {
  private docentesList = signal<Docente[]>([
    {
      nombre: 'Dr. Carlos Mendoza Ramos',
      grado: 'Doctor en Ingeniería de Sistemas',
      especialidad: 'Inteligencia Artificial y Machine Learning',
      correo: 'cmendoza@unamba.edu.pe',
      imagen: 'assets/images/teacher-placeholder.svg'
    },
    {
      nombre: 'Msc. Inés Palomino Silva',
      grado: 'Magíster en Ciencias de la Computación',
      especialidad: 'Desarrollo Web Fullstack y Arquitectura de Software',
      correo: 'ipalomino@unamba.edu.pe',
      imagen: 'assets/images/teacher-placeholder.svg'
    },
    {
      nombre: 'Ing. Jorge Torres Castillo',
      grado: 'Ingeniero Informático y de Sistemas',
      especialidad: 'Ciberseguridad y Redes de Computadoras',
      correo: 'jtorres@unamba.edu.pe',
      imagen: 'assets/images/teacher-placeholder.svg'
    }
  ]);

  getDocentes() {
    return this.docentesList.asReadonly();
  }
}
