import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    RouterModule,
    ScrollAnimationDirective
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements AfterViewInit {
  private seo = inject(SeoService);

  ngAfterViewInit() {
    this.seo.setPageMeta({
      title: 'EPIIS UNAMBA',
      description: 'Escuela Profesional de Ingeniería Informática y Sistemas de la Universidad Nacional Micaela Bastidas de Apurímac. Formando profesionales en TI con excelencia académica.'
    });
  }
  features = [
    {
      icon: 'pi pi-book',
      title: 'Malla Curricular',
      description: 'Explora nuestro plan de estudios actualizado para las exigencias del mercado global.',
      route: '/academic'
    },
    {
      icon: 'pi pi-users',
      title: 'Plana Docente',
      description: 'Conoce a nuestros ingenieros y catedráticos de trayectoria internacional.',
      route: '/teachers'
    },
    {
      icon: 'pi pi-id-card',
      title: 'Admisión',
      description: 'Entérate de las modalidades, fechas y requisitos para formar parte de EPIIS.',
      route: '/admissions'
    }
  ];

  stats = [
    { value: '10+', label: 'Años de Excelencia', icon: 'pi pi-calendar' },
    { value: '500+', label: 'Estudiantes Formados', icon: 'pi pi-users' },
    { value: '15+', label: 'Docentes Especializados', icon: 'pi pi-star' },
    { value: '3', label: 'Laboratorios Equipados', icon: 'pi pi-database' }
  ];
}
