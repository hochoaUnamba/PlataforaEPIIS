import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface CursoPlan {
  ciclo: string;
  titulo: string;
  cursos: string[];
}

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ScrollAnimationDirective],
  templateUrl: './academic.html',
  styleUrl: './academic.scss'
})
export class AcademicComponent {
  selectedYear = signal<'2022' | '2019'>('2022');

  malla2022: CursoPlan[] = [
    {
      ciclo: 'I',
      titulo: 'Ciencias Básicas',
      cursos: ['Matemática I', 'Física I', 'Química General', 'Introducción a la Ingeniería', 'Comunicación I', 'Metodología del Trabajo Universitario']
    },
    {
      ciclo: 'II',
      titulo: 'Fundamentos de Programación',
      cursos: ['Matemática II', 'Física II', 'Álgebra Lineal', 'Programación I', 'Comunicación II', 'Realidad Nacional y Globalización']
    },
    {
      ciclo: 'III',
      titulo: 'Ciencias de la Computación',
      cursos: ['Estructuras de Datos', 'Arquitectura de Computadoras', 'Cálculo Diferencial', 'Programación II', 'Base de Datos I', 'Metodología de la Investigación']
    },
    {
      ciclo: 'IV',
      titulo: 'Ingeniería de Software',
      cursos: ['Matemática Discreta', 'Sistemas Digitales', 'Probabilidad y Estadística', 'Programación III', 'Base de Datos II', 'Ingeniería de Requisitos']
    },
    {
      ciclo: 'V',
      titulo: 'Redes y Sistemas',
      cursos: ['Redes de Computadoras I', 'Sistemas Operativos', 'Análisis y Diseño de Software', 'Programación IV', 'Investigación Operativa', 'Realidad Nacional']
    },
    {
      ciclo: 'VI',
      titulo: 'Inteligencia Artificial',
      cursos: ['Redes de Computadoras II', 'Inteligencia Artificial', 'Arquitectura de Software', 'Desarrollo Web', 'Ingeniería de Software', 'Sistemas de Información']
    },
    {
      ciclo: 'VII',
      titulo: 'Especialización',
      cursos: ['Ciberseguridad', 'Machine Learning', 'Computación en la Nube', 'Desarrollo Móvil', 'Gestión de Proyectos TI', 'Emprendimiento Digital']
    },
    {
      ciclo: 'VIII',
      titulo: 'Innovación Tecnológica',
      cursos: ['Big Data', 'DevOps y CI/CD', 'Arquitecturas Empresariales', 'Auditoría de Sistemas', 'Formulación de Proyectos', 'Prácticas Preprofesionales I']
    },
    {
      ciclo: 'IX',
      titulo: 'Investigación Aplicada',
      cursos: ['Seminario de Tesis I', 'Gestión de TI', 'Liderazgo y Gestión del Cambio', 'Ética Profesional', 'Electivo I', 'Prácticas Preprofesionales II']
    },
    {
      ciclo: 'X',
      titulo: 'Titulación',
      cursos: ['Seminario de Tesis II', 'Gestión Estratégica Empresarial', 'Legislación Informática', 'Electivo II', 'Responsabilidad Social']
    }
  ];

  malla2019: CursoPlan[] = [
    {
      ciclo: 'I',
      titulo: 'Ciencias Básicas',
      cursos: ['Matemática I', 'Física I', 'Introducción a la Ingeniería Informática', 'Comunicación y Redacción', 'Metodología del Trabajo Universitario', 'Lógica y Programación']
    },
    {
      ciclo: 'II',
      titulo: 'Fundamentos',
      cursos: ['Matemática II', 'Física II', 'Álgebra Lineal', 'Programación I', 'Comunicación Técnica', 'Realidad Nacional']
    },
    {
      ciclo: 'III',
      titulo: 'Formación Profesional I',
      cursos: ['Estructuras de Datos', 'Circuitos Digitales', 'Cálculo Diferencial', 'Programación II', 'Base de Datos I', 'Estadística General']
    },
    {
      ciclo: 'IV',
      titulo: 'Formación Profesional II',
      cursos: ['Matemática Discreta', 'Arquitectura de Computadoras', 'Probabilidad y Estadística', 'Programación III', 'Base de Datos II', 'Análisis de Sistemas']
    },
    {
      ciclo: 'V',
      titulo: 'Redes y Sistemas',
      cursos: ['Redes de Computadoras', 'Sistemas Operativos', 'Diseño de Sistemas', 'Programación IV', 'Investigación Operativa', 'Metodología de la Investigación']
    },
    {
      ciclo: 'VI',
      titulo: 'Especialidad',
      cursos: ['Comunicación de Datos', 'Inteligencia de Negocios', 'Arquitectura de Software', 'Desarrollo Web', 'Ingeniería de Software', 'Sistemas de Información Gerencial']
    },
    {
      ciclo: 'VII',
      titulo: 'Tecnologías Emergentes',
      cursos: ['Seguridad Informática', 'Sistemas Distribuidos', 'Computación Gráfica', 'Programación Web Avanzada', 'Gestión de Proyectos', 'Formulación de Proyectos TI']
    },
    {
      ciclo: 'VIII',
      titulo: 'Gestión TI',
      cursos: ['Auditoría de Sistemas', 'Sistemas Embebidos', 'Robótica Educativa', 'Calidad de Software', 'Prácticas Preprofesionales I', 'Electivo I']
    },
    {
      ciclo: 'IX',
      titulo: 'Investigación',
      cursos: ['Seminario de Tesis I', 'Gobierno TI', 'Ética Profesional', 'Gestión Empresarial', 'Prácticas Preprofesionales II', 'Electivo II']
    },
    {
      ciclo: 'X',
      titulo: 'Titulación',
      cursos: ['Seminario de Tesis II', 'Legislación Informática', 'Formación de Emprendedores', 'Responsabilidad Social']
    }
  ];

  currentPlanes = computed(() =>
    this.selectedYear() === '2022' ? this.malla2022 : this.malla2019
  );

  switchMalla(year: '2022' | '2019') {
    this.selectedYear.set(year);
  }
}
