import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Cliente } from '../../app/models/Cliente.model';
import { ClienteService } from '../../app/services/cliente.service';

@Component({
  selector: 'app-atualizar-cliente',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './atualizar-cliente.component.html',
  styleUrl: './atualizar-cliente.component.css',
})
export class AtualizarClienteComponent {
  public clienteId: number = 0;
  public cliente: Cliente = new Cliente(0, '', '');

  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.clienteId = +params['id']; // O sinal de mais (+) converte a string para número
      this.listarCliente();
    });
  }
  ngOnInit(): void {
    this.listarCliente();
  }
  listarCliente(): void {
    this._clienteService.getCliente(this.clienteId).subscribe((res: any) => {
      this.cliente = new Cliente(res[0].id, res[0].nome, res[0].endereco);
    });
  }
  atualizar(id: number) {
    this._clienteService.atualizarCliente(id, this.cliente).subscribe({
      next: (cliente) => {
        // Supondo que você deseje redefinir o objeto cliente aqui
        this.cliente = new Cliente(0, '', '');
        // A navegação deve ocorrer dentro do callback de sucesso
        this._router.navigate(['/listar']);
      },
      error: (err) => {
        // Exibe um alerta em caso de erro
        alert('Erro ao atualizar cliente');
      },
    });
  }
}
