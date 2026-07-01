import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <div class="p-4">
      <p-card title="Gestión Académica">
        <p>Bienvenido a la sección académica de la Escuela Profesional de Ingeniería Informática y Sistemas.</p>
      </p-card>
    </div>
  `
})
export class AcademicComponent {}
