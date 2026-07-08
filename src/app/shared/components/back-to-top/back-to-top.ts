import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="back-to-top" [class.visible]="isVisible()">
      <button
        pButton
        type="button"
        icon="pi pi-arrow-up"
        class="p-button-rounded p-button-primary shadow-3"
        (click)="scrollToTop()"
        aria-label="Volver arriba">
      </button>
    </div>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: all 0.3s ease;

      &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  `]
})
export class BackToTopComponent {
  isVisible = signal(false);

  @HostListener('window:scroll', [])
  onScroll() {
    this.isVisible.set(window.scrollY > 400);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
