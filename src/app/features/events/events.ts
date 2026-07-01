import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h2>Próximos Eventos</h2>
      <p>Seminarios, congresos, talleres y actividades académicas programadas.</p>
    </div>
  `
})
export class EventsComponent {}
