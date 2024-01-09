import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Cliente } from '../models/Cliente.model';
@Injectable({
  providedIn: 'root'
})

export class ClienteService {
url: string = 'http://localhost:3000/clientes';

  constructor(
    private httpClient:HttpClient,
    private _snackBar: MatSnackBar) { }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.url);
  }

  cadastrarCliente(cliente: Cliente): Observable<Cliente[]> {
    return this.httpClient.post<Cliente[]>(this.url, cliente);
  }

  getCliente(id: number): Observable<Cliente[]>{
    const urlListarUm = `${this.url}?id=${id}`;
    return this.httpClient.get<Cliente[]>(urlListarUm);
  }

  atualizarCliente(id: any, cliente: Cliente):  Observable<Cliente[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this.httpClient.put<Cliente[]>(urlAtualizar, cliente);
  }

  excluirCliente(id: any): Observable<Cliente[]>{
    const urlExcluir = `${this.url}/${id}`;
    return this.httpClient.delete<Cliente[]>(urlExcluir);
  }

  showMessage(msg: string, isError: boolean = false): void{
    this._snackBar.open(msg, 'X', {
      duration: 600,
      verticalPosition: "top",
      panelClass: isError ? 'msg-error' : 'msg-success'
    });
  }

  create(cliente: Cliente): Observable<Cliente[]>{
    return this.httpClient.post<Cliente[]>(this.url, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorMsg(e))
    )
  }

  errorMsg(e: any): Observable<Cliente[]>{
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }
}
