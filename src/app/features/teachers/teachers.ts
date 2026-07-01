import { SharedModule } from 'primeng/api';
import { Component, OnInit, signal, computed } from '@angular/core'; // <- Cambiado a @angular/core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';

interface Docente {
  nombre: string;
  grado: string;
  especialidad: string;
  correo: string;
  imagen: string;
}

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    CardModule, 
    ButtonModule, 
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    TooltipModule,
    SharedModule
  ],
  templateUrl: './teachers.html',
  styleUrl: './teachers.scss'
})
export class TeachersComponent implements OnInit {
  // Manejo de estado moderno en Angular utilizando Signals
  searchTerm = signal<string>('');
  docentesList = signal<Docente[]>([]);

  ngOnInit() {
    this.docentesList.set([
      {
        nombre: 'Dr. Carlos Mendoza Ramos',
        grado: 'Doctor en Ingeniería de Sistemas',
        especialidad: 'Inteligencia Artificial y Machine Learning',
        correo: 'cmendoza@unamba.edu.pe',
        imagen: 'https://unsplash.com'
      },
      {
        nombre: 'Msc. Inés Palomino Silva',
        grado: 'Magíster en Ciencias de la Computación',
        especialidad: 'Desarrollo Web Fullstack y Arquitectura de Software',
        correo: 'ipalomino@unamba.edu.pe',
        imagen: 'https://unsplash.com'
      },
      {
        nombre: 'Ing. Jorge Torres Castillo',
        grado: 'Ingeniero Informático y de Sistemas',
        especialidad: 'Ciberseguridad y Redes de Computadoras',
        correo: 'jtorres@unamba.edu.pe',
        imagen: 'https://unsplash.com'
      }
    ]);
  }

  // Filtrado computado reactivo en base a lo que escribe el usuario
  filteredDocentes = computed(() => {
  const term = this.searchTerm().toLowerCase().trim();
  if (!term) return this.docentesList();
  
  // CORRECCIÓN: Se añade ': Docente' al parámetro d
  return this.docentesList().filter((d: Docente) => 
    d.nombre.toLowerCase().includes(term) || 
    d.especialidad.toLowerCase().includes(term)
  );
});
}
