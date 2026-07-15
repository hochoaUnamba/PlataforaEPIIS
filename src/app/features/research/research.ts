import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';
import { ResearchService } from '../../core/services/research.service';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule, ScrollAnimationDirective],
  templateUrl: './research.html',
  styleUrl: './research.scss'
})
export class ResearchComponent {
  private seo = inject(SeoService);
  private researchService = inject(ResearchService);
  lineasInvestigacion = this.researchService.getLineas();
  proyectos = this.researchService.getProyectos();

  constructor() {
    this.seo.setPageMeta({ description: 'Líneas de investigación y proyectos de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }
}
