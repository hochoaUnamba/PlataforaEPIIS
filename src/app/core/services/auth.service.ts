import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private isAuthenticated = signal<boolean>(sessionStorage.getItem('epiis_admin') === 'true');

  isLoggedIn() {
    return this.isAuthenticated.asReadonly();
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'epiis2026') {
      sessionStorage.setItem('epiis_admin', 'true');
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('epiis_admin');
    this.isAuthenticated.set(false);
    this.router.navigate(['/home']);
  }
}
