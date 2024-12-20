import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

// Layout Components
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// Routes Configuration
export const routes: Routes = [
  // Routes trước khi đăng nhập
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then(m => m.LoginComponent),
      },
    ],
  },
  // Routes sau khi đăng nhập
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard], // Bảo vệ route sau đăng nhập
    children: [
      {
        path: 'welcome',
        loadComponent: () =>
          import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent),
      },
      {
        path: 'monitor',
        loadComponent: () =>
          import('./pages/monitor/monitor.component').then(m => m.MonitorComponent),
      },
    ],
  },
  // Route không tìm thấy (404)
  { path: '**', redirectTo: 'login' },
];
