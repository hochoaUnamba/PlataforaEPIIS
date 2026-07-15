import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INSTITUCIONAL } from '../../../core/config/institucional.config';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class TopbarComponent {
  institucional = INSTITUCIONAL;
}
