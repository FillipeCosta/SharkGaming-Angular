import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ClienteService } from '../../app/cliente.service';
import { Cliente } from '../../app/models/Cliente.model';

@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, MatButtonModule],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})

export class ListarClienteComponent {

  public clientes: Cliente[] = [];

  constructor(private _clienteService: ClienteService, _router:RouterModule) { }

  ngOnInit():void {
    this.listarClientes();
    console.log(this.clientes);
  }

  listarClientes():void {
    this._clienteService.getClientes().subscribe(
      retornaCliente => {
        this.clientes = retornaCliente.map(
          item => {
            return new Cliente(
              item.id,
              item.nome,
              item.endereco
            );
          }
        )
      }
    )
  }
}
