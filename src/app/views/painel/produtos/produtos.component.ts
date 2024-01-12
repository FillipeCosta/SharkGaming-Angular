import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { Produto } from '../../../models/Produto.model';
import { ProdutosService } from '../../../services/produtos.service';
import { error } from 'console';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [MatIconModule, RouterModule, MatButtonModule, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  public produtos: Produto [] = [];

  constructor(private _produto: ProdutosService, private router: Router){}

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

  excluirProduto(id: number) {
    this._produto.removerProduto(id).subscribe({
      next: (produto) => {
        this.listarProdutos();
        this.router.navigate(['/produtos/listar'])
      },
      error: (error) => {
        console.log("Erro ao excluir produto");
      },
    });
  }
}
