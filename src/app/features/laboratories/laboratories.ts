import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SharedModule } from 'primeng/api';

interface Laboratorio {
  nombre: string;
  capacidad: number;
  ubicacion: string;
  encargado: string;
  equipos: string[];
  imagen: string;
  estado: 'Operativo' | 'Mantenimiento';
}

@Component({
  selector: 'app-laboratories',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, SharedModule],
  templateUrl: './laboratories.html',
  styleUrl: './laboratories.scss'
})
export class LaboratoriesComponent implements OnInit {
  laboratorios = signal<Laboratorio[]>([]);

  ngOnInit() {
    this.laboratorios.set([
      {
        nombre: 'Laboratorio de Inteligencia Artificial y Robótica',
        capacidad: 25,
        ubicacion: 'Cuarto Piso',
        encargado: 'Dr. Carlos Mendoza Ramos',
        equipos: ['GPUs NVIDIA RTX', 'Kits de Robótica Arduino/Raspberry', 'Estaciones de Trabajo Linux'],
        imagen: 'https://picsum.photos/seed/picsum/200/300',
        estado: 'Operativo'
      },
      {
        nombre: 'Laboratorio de Redes y Ciberseguridad',
        capacidad: 30,
        ubicacion: 'Tercer Piso',
        encargado: 'Ing. Jorge Torres Castillo',
        equipos: ['Routers y Switches Cisco v3', 'Servidores de Prueba', 'Racks de Comunicaciones'],
        imagen: 'https://picsum.photos/seed/picsum/200/300',
        estado: 'Operativo'
      },
      {
        nombre: 'Laboratorio de Desarrollo de Software Fullstack',
        capacidad: 40,
        ubicacion: 'Segundo Piso',
        encargado: 'Msc. Inés Palomino Silva',
        equipos: ['Monitores Duales', 'Estaciones de Alta Gama Core i7', 'Servidores NAS'],
        imagen: 'https://picsum.photos/seed/picsum/200/300',
        estado: 'Mantenimiento'
      }
    ]);
    console.log('Datos cargados en el Signal:', this.laboratorios());
  }

  getSeverity(estado: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | undefined {
    switch (estado) {
      case 'Operativo': return 'success';
      case 'Mantenimiento': return 'warn';
      default: return undefined;
    }
  }
}
