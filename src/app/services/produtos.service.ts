import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private urlApi = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  getProduto(id:any): Observable<Produto>{
    const urlIdProduto = `${this.urlApi}/${id}`;
    return this.http.get<Produto>(urlIdProduto);
  }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.urlApi);
  }

  cadastrarProduto(produto:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.urlApi, produto);
  }

  atualizarProduto(id:any, produto:Produto):Observable<Produto[]>{
    const urlAtualizar = `${this.urlApi}/${id}`;
    return this.http.put<Produto[]>(urlAtualizar, produto)
  }

  removerProduto(id: any): Observable<Produto>{
    const urlRemover = `${this.urlApi}/${id}`;
    return this.http.delete<Produto>(urlRemover);
  }
}
