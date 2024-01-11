import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


export const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
    title: 'Inicio',
  },
  { path: 'login',
    title: 'Login',
    loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'painel',
    title: 'Painel',
    loadChildren: () => import('./views/painel/painel.routes')
  }
];
