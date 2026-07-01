import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit {
  quienesSomos: string = '';
  mision: string = '';
  vision: string = '';

  ngOnInit() {
    // Definición de textos institucionales según
    this.quienesSomos = 'La Escuela Profesional de Ingeniería Informática y Sistemas...';
    this.mision = 'Formar profesionales ...';
    this.vision = 'Ser una escuela acreditada ...';
  }
}