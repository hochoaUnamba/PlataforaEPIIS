import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SeoService } from '../../core/services/seo.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class AdminComponent {
  private seo = inject(SeoService);
  private authService = inject(AuthService);
  private messageService = inject(MessageService);

  isLoggedIn = this.authService.isLoggedIn();
  username = '';
  password = '';

  constructor() {
    this.seo.setPageMeta({ description: 'Panel de administración de la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }

  doLogin() {
    if (!this.username || !this.password) return;
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.messageService.add({ severity: 'success', summary: 'Bienvenido', detail: 'Inicio de sesión exitoso.', life: 3000 });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales incorrectas.', life: 3000 });
    }
    this.username = '';
    this.password = '';
  }

  doLogout() {
    this.authService.logout();
  }
}
