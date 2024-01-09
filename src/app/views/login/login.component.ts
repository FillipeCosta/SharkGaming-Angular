import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login.service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Input()
    disabled: boolean = true;

  form: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required]
  });

  constructor(private _loginService: LoginServiceService, private fb: FormBuilder) { }

  login() {
    let usuario = this._loginService.login(this.form.value.usuario, this.form.value.senha);

    if (usuario) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }

}
