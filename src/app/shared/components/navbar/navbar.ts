import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, SharedModule } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, SharedModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);

  items: MenuItem[] = [
    { label: 'Inicio', routerLink: '/home' },
    {
      label: 'Nosotros',
      items: [
        { label: 'Quiénes Somos', routerLink: '/about' },
        { label: 'Misión y Visión', routerLink: '/about', fragment: 'mision-vision' }
      ]
    },
    { label: 'Docentes', routerLink: '/teachers' },
    { label: 'Laboratorios', routerLink: '/laboratories' },
    { label: 'Académico', routerLink: '/academic' },
    { label: 'Investigación', routerLink: '/research' },
    { label: 'Noticias', routerLink: '/news' },
    { label: 'Eventos', routerLink: '/events' },
    { label: 'Galería', routerLink: '/gallery' },
    { label: 'Contacto', routerLink: '/contact' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }
}
