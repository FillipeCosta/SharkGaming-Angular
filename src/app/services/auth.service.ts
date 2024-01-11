import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  login(nome: string, senha: string){
    return this.http.get<any[]>(`${this.apiUrl}?nome=${nome}&senha=${senha}`)
  }

  
}
