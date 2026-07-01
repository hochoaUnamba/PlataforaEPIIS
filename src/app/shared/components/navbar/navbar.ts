import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, SharedModule } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, SharedModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', routerLink: '/home' },
      {
        label: 'Nosotros',
        icon: 'pi pi-university',
        items: [
          { label: 'Quiénes Somos', icon: 'pi pi-info-circle', routerLink: '/about' },
          { label: 'Misión y Visión', icon: 'pi pi-compass', routerLink: '/about' } // Apunta a la sección de identidad dentro de about
        ]
      },      
      { label: 'Docentes', icon: 'pi pi-users', routerLink: '/teachers' },
      { label: 'Laboratorios', icon: 'pi pi-database', routerLink: '/laboratories' },
      { label: 'Investigación', icon: 'pi pi-search', routerLink: '/research' },
      { label: 'Noticias', icon: 'pi pi-megaphone', routerLink: '/news' },
      { label: 'Contacto', icon: 'pi pi-envelope', routerLink: '/contact' }
    ];
  }
}


