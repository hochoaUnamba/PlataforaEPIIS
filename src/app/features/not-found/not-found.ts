import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFoundComponent implements AfterViewInit {
  private seo = inject(SeoService);

  ngAfterViewInit() {
    this.seo.setPageMeta({
      title: 'Página no encontrada | EPIIS UNAMBA',
      description: 'La página que buscas no existe o ha sido movida.'
    });
  }
}
