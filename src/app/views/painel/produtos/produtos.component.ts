import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Produto } from '../../../models/Produto.model';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [MatIconModule, RouterModule, MatButtonModule, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  public produtos: Produto [] = [];

  constructor(private _produto: ProdutosService){}

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produto.getProdutos().subscribe(
      retornarProdutos => {
        this.produtos = retornarProdutos.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.preco,
              item.descricao,
              item.foto,
            )
          }
        )
      }
    )

  }
}
