import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { environment } from '../../../environments/environment';
import { INSTITUCIONAL } from '../../core/config/institucional.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  // 2. REGISTRA TOASTMODULE AQUÍ ADENTRO
  imports: [CommonModule, FormsModule, InputTextModule, TextareaModule, ButtonModule, ToastModule, ScrollAnimationDirective],
  // 3. PROVEE EL SERVICIO EXCLUSIVAMENTE PARA ESTE COMPONENTE Standalone
  providers: [MessageService], 
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private seo = inject(SeoService);
  private messageService = inject(MessageService);
  institucional = INSTITUCIONAL;

  nombre = signal<string>('');
  correo = signal<string>('');
  mensaje = signal<string>('');
  submitting = signal(false);

  constructor() {
    this.seo.setPageMeta({ description: 'Contáctate con la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA. Estamos en Abancay, Apurímac.' });
  }

  async enviarMensaje() {
    if (!this.nombre() || !this.correo() || !this.mensaje()) return;
    this.submitting.set(true);
    try {
      if (environment.features.contactForm && environment.emailService) {
        const resp = await fetch(environment.emailService, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name: this.nombre(), email: this.correo(), message: this.mensaje() })
        });
        if (!resp.ok) throw new Error('Network error');
      }
      this.messageService.add({ severity: 'success', summary: 'Envío Exitoso', detail: '¡Mensaje recibido! Nos pondremos en contacto pronto.', life: 4000 });
      this.nombre.set(''); this.correo.set(''); this.mensaje.set('');
    } catch {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo enviar el mensaje. Intenta de nuevo.', life: 4000 });
    } finally {
      this.submitting.set(false);
    }
  }
}

