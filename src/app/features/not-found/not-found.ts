import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  template: `
    <div class="flex flex-column align-items-center justify-content-center" style="min-height: 60vh;">
      <i class="pi pi-exclamation-triangle text-6xl text-yellow-500 mb-4"></i>
      <h1 class="text-6xl font-bold text-gray-800 mb-2">404</h1>
      <p class="text-xl text-gray-500 mb-4">Página no encontrada</p>
      <p-button label="Volver al inicio" icon="pi pi-home" routerLink="/home"></p-button>
    </div>
  `
})
export class NotFoundComponent {}
