import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardModule, ScrollAnimationDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit {
  quienesSomos: string = '';
  mision: string = '';
  vision: string = '';

  ngOnInit() {
    this.quienesSomos = 'La Escuela Profesional de Ingeniería Informática y Sistemas (EPIIS) de la Universidad Nacional Micaela Bastidas de Apurímac (UNAMBA) es una unidad académica dedicada a la formación de profesionales altamente competitivos en el campo de la ingeniería informática, ciencias de la computación y sistemas de información. Con una sólida base científica, tecnológica y humanística, formamos líderes capaces de transformar la sociedad mediante la innovación digital.';
    this.mision = 'Formar ingenieros informáticos y de sistemas éticos, innovadores y competentes, con capacidad de analizar, diseñar, implementar y gestionar soluciones tecnológicas que contribuyan al desarrollo sostenible de la región Apurímac y del país, promoviendo la investigación científica, la transferencia tecnológica y la responsabilidad social.';
    this.vision = 'Ser una escuela profesional acreditada internacionalmente, reconocida por la excelencia académica, la producción científica y la formación de ingenieros líderes en inteligencia artificial, ciberseguridad, desarrollo de software y transformación digital, contribuyendo activamente al desarrollo tecnológico y social del Perú.';
  }
}