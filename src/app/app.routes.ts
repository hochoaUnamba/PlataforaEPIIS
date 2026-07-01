import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Cargamos el Layout principal que contiene el Navbar, Topbar y Footer
    loadComponent: () => import('./core/layout/public-layout/public-layout').then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then(m => m.AboutComponent)
      },
      {
        path: 'academic',
        loadComponent: () => import('./features/academic/academic').then(m => m.AcademicComponent)
      },
      {
        path: 'research',
        loadComponent: () => import('./features/research/research').then(m => m.ResearchComponent)
      },
      {
        path: 'teachers',
        loadComponent: () => import('./features/teachers/teachers').then(m => m.TeachersComponent)
      },
      {
        path: 'laboratories',
        loadComponent: () => import('./features/laboratories/laboratories').then(m => m.LaboratoriesComponent)
      },
      {
        path: 'admissions',
        loadComponent: () => import('./features/admissions/admissions').then(m => m.AdmissionsComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent)
      },
      {
        path: 'news',
        loadComponent: () => import('./features/news/news').then(m => m.NewsComponent)
      },
      {
        path: 'events',
        loadComponent: () => import('./features/events/events').then(m => m.EventsComponent)
      }
    ]
  },
  {
    // Ruta comodín para redirigir si el usuario escribe una URL que no existe
    path: '**',
    redirectTo: 'home'
  }
];