import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="p-4">
      <h2>Proceso de Admisión</h2>
      <p>Toda la información necesaria para postular e ingresar a la carrera de EPIIS.</p>
      <button pButton label="Ver Requisitos" icon="pi pi-file" class="p-button-primary"></button>
    </div>
  `
})
export class AdmissionsComponent {}
