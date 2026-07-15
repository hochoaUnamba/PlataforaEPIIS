import { Component, signal, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { SharedModule, MessageService } from 'primeng/api';
import { LaboratoriesService, Laboratorio } from '../../core/services/laboratories.service';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-laboratories',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, ToastModule, SharedModule, ScrollAnimationDirective],
  providers: [MessageService],
  templateUrl: './laboratories.html',
  styleUrl: './laboratories.scss'
})
export class LaboratoriesComponent implements AfterViewInit {
  private seo = inject(SeoService);
  private laboratoriesService = inject(LaboratoriesService);
  private messageService = inject(MessageService);
  laboratorios = signal(this.laboratoriesService.getLaboratorios()());
  loading = this.laboratoriesService.isLoading();

  ngAfterViewInit() {
    this.seo.setPageMeta({ description: 'Laboratorios equipados de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA en Abancay.' });
  }

  getSeverity(estado: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | undefined {
    switch (estado) {
      case 'Operativo': return 'success';
      case 'Mantenimiento': return 'warn';
      default: return undefined;
    }
  }

  verHorarios(lab: Laboratorio) {
    this.messageService.add({ severity: 'info', summary: 'Horarios', detail: `Horarios de ${lab.nombre} próximamente disponibles.`, life: 3000 });
  }
}
