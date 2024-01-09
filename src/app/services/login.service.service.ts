import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  users: any[] = [
    {
      id: 1,
      nome: 'admin',
      senha: '123',
    },
  ];

  session: any;

  constructor() {}

  login(usuario: string, senha: string) {
    let login = this.users.find((u) => u.nome === usuario && u.senha === senha);
    if (login) {
      this.session = login;
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return login;
  }
}
