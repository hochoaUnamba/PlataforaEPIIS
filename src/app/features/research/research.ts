import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { SharedModule, MessageService } from 'primeng/api';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';
import { ResearchService, ProyectoInvestigacion } from '../../core/services/research.service';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule, ToastModule, SharedModule, ScrollAnimationDirective],
  providers: [MessageService],
  templateUrl: './research.html',
  styleUrl: './research.scss'
})
export class ResearchComponent {
  private seo = inject(SeoService);
  private researchService = inject(ResearchService);
  private messageService = inject(MessageService);
  lineasInvestigacion = this.researchService.getLineas();
  proyectos = this.researchService.getProyectos();
  loading = this.researchService.isLoading();

  constructor() {
    this.seo.setPageMeta({ description: 'Líneas de investigación y proyectos de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }

  verRepositorio(proy: ProyectoInvestigacion) {
    this.messageService.add({ severity: 'info', summary: 'Repositorio', detail: `Repositorio de "${proy.titulo}" próximamente disponible.`, life: 3000 });
  }
}
