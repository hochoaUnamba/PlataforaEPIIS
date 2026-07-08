import { SharedModule } from 'primeng/api';
import { Component, signal, computed } from '@angular/core';
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
  searchTerm = signal<string>('');
  docentesList = signal<Docente[]>([]);

  constructor(private teachersService: TeachersService) {
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
