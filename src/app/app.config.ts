import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AtualizarClienteComponent } from '../backend/atualizar-cliente/atualizar-cliente.component';
import { CadastrarClienteComponent } from '../backend/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClienteComponent } from '../backend/listar-cliente/listar-cliente.component';
import { DeletarComponenteComponent } from './deletar-componente/deletar-componente.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listar', component: ListarClienteComponent },
  { path: 'cadastrar', component: CadastrarClienteComponent },
  { path: 'editar/:id', component: AtualizarClienteComponent },
  { path: 'deletar/:id', component: DeletarComponenteComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient( withFetch()),
    importProvidersFrom(HttpClientModule),
  ],
};
