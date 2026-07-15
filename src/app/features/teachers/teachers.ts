import { SharedModule } from 'primeng/api';
import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TeachersService, Docente } from '../../core/services/teachers.service';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

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
    SharedModule,
    ScrollAnimationDirective
  ],
  templateUrl: './teachers.html',
  styleUrl: './teachers.scss'
})
export class TeachersComponent {
  private seo = inject(SeoService);
  private teachersService = inject(TeachersService);

  searchTerm = signal<string>('');
  docentesList = signal<Docente[]>([]);

  constructor() {
    this.seo.setPageMeta({ description: 'Conoce a los docentes de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
    this.docentesList.set(this.teachersService.getDocentes()());
  }

  filteredDocentes = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.docentesList();
    return this.docentesList().filter((d: Docente) => 
      d.nombre.toLowerCase().includes(term) || 
      d.especialidad.toLowerCase().includes(term)
    );
  });
}
