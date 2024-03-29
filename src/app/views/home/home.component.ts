import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Produto } from '../../models/Produto.model';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public titulo!: string;
  public texto!: string;

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
