import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/public-layout/public-layout').then(m => m.PublicLayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Inicio | EPIIS UNAMBA', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
      { path: 'about', title: 'Nosotros | EPIIS UNAMBA', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
      { path: 'academic', title: 'Gestión Académica | EPIIS UNAMBA', loadComponent: () => import('./features/academic/academic').then(m => m.AcademicComponent) },
      { path: 'research', title: 'Investigación | EPIIS UNAMBA', loadComponent: () => import('./features/research/research').then(m => m.ResearchComponent) },
      { path: 'teachers', title: 'Plana Docente | EPIIS UNAMBA', loadComponent: () => import('./features/teachers/teachers').then(m => m.TeachersComponent) },
      { path: 'laboratories', title: 'Laboratorios | EPIIS UNAMBA', loadComponent: () => import('./features/laboratories/laboratories').then(m => m.LaboratoriesComponent) },
      { path: 'admissions', title: 'Admisión | EPIIS UNAMBA', loadComponent: () => import('./features/admissions/admissions').then(m => m.AdmissionsComponent) },
      { path: 'contact', title: 'Contacto | EPIIS UNAMBA', loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent) },
      { path: 'news', title: 'Noticias | EPIIS UNAMBA', loadComponent: () => import('./features/news/news').then(m => m.NewsComponent) },
      { path: 'events', title: 'Eventos | EPIIS UNAMBA', loadComponent: () => import('./features/events/events').then(m => m.EventsComponent) },
      { path: 'gallery', title: 'Galería | EPIIS UNAMBA', loadComponent: () => import('./features/gallery/gallery').then(m => m.GalleryComponent) },
      { path: 'calendar', title: 'Calendario | EPIIS UNAMBA', loadComponent: () => import('./features/calendar/calendar').then(m => m.CalendarComponent) },
      {
        path: 'admin',
        title: 'Admin | EPIIS UNAMBA',
        canActivate: [authGuard],
        loadComponent: () => import('./features/admin/admin').then(m => m.AdminComponent)
      }
    ]
  },
  { path: '**', title: 'Página no encontrada | EPIIS UNAMBA', loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFoundComponent) }
];
