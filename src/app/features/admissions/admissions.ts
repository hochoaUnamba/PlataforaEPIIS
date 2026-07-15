import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, AccordionModule, ScrollAnimationDirective],
  templateUrl: './admissions.html',
  styleUrl: './admissions.scss'
})
export class AdmissionsComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setPageMeta({ description: 'Modalidades de admisión y requisitos para ingresar a la Escuela Profesional de Ingeniería Informática y Sistemas de la UNAMBA.' });
  }
  protected readonly window = window;
  modalidades = [
    {
      titulo: 'Examen de Admisión Ordinario',
      descripcion: 'Proceso regular para egresados de secundaria y público en general. Incluye evaluación de conocimientos y aptitud vocacional.',
      icono: 'pi pi-file'
    },
    {
      titulo: 'Traslado Externo',
      descripcion: 'Para estudiantes de otras universidades que deseen continuar sus estudios en EPIIS. Convalidación de cursos según evaluación.',
      icono: 'pi pi-refresh'
    },
    {
      titulo: 'Titulados o Graduados',
      descripcion: 'Modalidad para profesionales que buscan una segunda carrera o título de ingeniería. Evaluación de competencias previas.',
      icono: 'pi pi-user'
    },
    {
      titulo: 'Deportista Calificado',
      descripcion: 'Dirigido a deportistas destacados que representen a la región o al país. Evaluación académica y deportiva integral.',
      icono: 'pi pi-star'
    }
  ];

  requisitos = [
    'DNI o partida de nacimiento (original y copia)',
    'Certificado de estudios secundarios (original)',
    'Ficha de inscripción debidamente llenada',
    'Comprobante de pago por derecho de admisión',
    'Fotografías tamaño carnet (02 unidades)',
    'Declaración jurada de salud'
  ];
}
