import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <div class="back-to-top" [class.visible]="isVisible()">
      <button
        class="btt-btn"
        (click)="scrollToTop()"
        aria-label="Volver arriba">
        <i class="pi pi-arrow-up"></i>
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
      transform: translateY(16px) scale(0.9);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
    .btt-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      color: white;
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s ease;
    }
    .btt-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(30, 58, 138, 0.4);
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
