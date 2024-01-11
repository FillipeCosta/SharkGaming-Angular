import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {
    this.loginForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onLogin(): void {
    const { nome, senha } = this.loginForm.value;
    this.authService.login(nome, senha).subscribe((res) => {
      if (res.length) {
        console.log('Login feito com sucesso', res[0]);
        this.route.navigate(['/inicio']);
      } else {
        console.log('Login inválido');
      }
    });
  }
}
