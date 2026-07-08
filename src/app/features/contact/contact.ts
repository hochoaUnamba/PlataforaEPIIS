import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

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
  nombre = signal<string>('');
  correo = signal<string>('');
  mensaje = signal<string>('');

  // 4. INYECTA EL SERVICIO EN EL CONSTRUCTOR
  constructor(private messageService: MessageService) {}

  enviarMensaje() {
    console.log('--- Datos Enviados ---', this.nombre(), this.correo(), this.mensaje());
    
    // 5. REEMPLAZAMOS EL ALERT POR LA NOTIFICACIÓN ELEGANTE DE PRIMENG
    this.messageService.add({ 
      severity: 'success', 
      summary: 'Envío Exitoso', 
      detail: '¡Mensaje recibido! Nos pondremos en contacto pronto.',
      life: 4000 // Duración en pantalla: 4 segundos
    });
    
    // Limpiar campos del Signal reactivo
    this.nombre.set('');
    this.correo.set('');
    this.mensaje.set('');
  }
}

