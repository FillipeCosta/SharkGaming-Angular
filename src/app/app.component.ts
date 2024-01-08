import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { ListarClienteComponent } from '../backend/listar-cliente/listar-cliente.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ListarClienteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shark Games';
  onSubmit(form: NgForm) {
    let dados = `
      Nome: ${form.value.nome}
      Senha: ${form.value.senha}`;

  console.log(dados)
  }
}
