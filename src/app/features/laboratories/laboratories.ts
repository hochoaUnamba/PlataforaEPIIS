import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SharedModule } from 'primeng/api';
import { LaboratoriesService } from '../../core/services/laboratories.service';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-laboratories',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, SharedModule, ScrollAnimationDirective],
  templateUrl: './laboratories.html',
  styleUrl: './laboratories.scss'
})
export class LaboratoriesComponent {
  private laboratoriesService = inject(LaboratoriesService);
  laboratorios = signal(this.laboratoriesService.getLaboratorios()());

  getSeverity(estado: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | undefined {
    switch (estado) {
      case 'Operativo': return 'success';
      case 'Mantenimiento': return 'warn';
      default: return undefined;
    }
  }
}
