import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    CarouselModule, 
    ButtonModule, 
    CardModule, 
    RouterModule 
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  banners: any[] = [];
  features: any[] = [];

  ngOnInit() {
    this.banners = [
      {
        image: 'https://unsplash.com',
        title: 'Bienvenidos a EPIIS',
        description: 'Formando ingenieros líderes en computación, desarrollo de software e inteligencia artificial.'
      },
      {
        image: 'https://unsplash.com',
        title: 'Investigación y Tecnología',
        description: 'Descubre nuestros laboratorios especializados y proyectos de innovación científica.'
      }
    ];

    this.features = [
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
  }
}
