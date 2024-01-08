import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: 'inicio', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations()]
};
