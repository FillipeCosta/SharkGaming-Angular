import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from '../../app/models/Cliente.model';
import { ClienteService } from '../../app/services/cliente.service';
@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css',
})
export class ListarClienteComponent {
  public clientes: Cliente[] = [];

  constructor(
    private _clienteService: ClienteService,
    private _router: Router) {}

  ngOnInit(): void {
    this.listarClientes();
    console.log(this.clientes);
  }

  listarClientes(): void {
    this._clienteService.getClientes().subscribe((retornaCliente) => {
      this.clientes = retornaCliente.map((item) => {
        return new Cliente(item.id, item.nome, item.endereco);
      });
    });
  }

  excluirCliente(id: number) {
    this._clienteService.excluirCliente(id).subscribe({
      next: (cliente) => {
        this.listarClientes();
        this._router.navigate(['/listar']);
      },
      error: (error) => {
        alert('Erro ao excluir cliente');
      },
    });
  }
}
