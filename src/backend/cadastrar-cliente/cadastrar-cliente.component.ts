import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from '../../app/models/Cliente.model';
import { ClienteService } from '../../app/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, MatButtonModule],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css',
})
export class CadastrarClienteComponent {
  public cliente: Cliente = new Cliente(0, '', '');

  constructor(
    private _clienteService: ClienteService,
    private _router: Router
  ) {}

  cadastrarCliente(): void {
    this._clienteService.cadastrarCliente(this.cliente).subscribe({
      next: (cliente) => {
        this.cliente = new Cliente(0, '', '');
        alert('Cliente cadastrado com sucesso!');
        this._router.navigate(['/listar']);
      },
      error: (err) => {
        console.log(err + ' Erro ao cadastrar cliente!');
      }
    });

  }
}
