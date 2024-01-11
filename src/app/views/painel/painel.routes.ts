import { Routes } from '@angular/router';
import { AtualizarClienteComponent } from '../../../backend/atualizar-cliente/atualizar-cliente.component';
import { CadastrarClienteComponent } from '../../../backend/cadastrar-cliente/cadastrar-cliente.component';
import { DeletarComponenteComponent } from '../../deletar-componente/deletar-componente.component';
import { ListarClienteComponent } from './clientes/listar-cliente/listar-cliente.component';
import { PainelComponent } from './painel.component';
import { ProdutosComponent } from './produtos/produtos.component';

export default [
  {
    path: '',
    component: PainelComponent,
    title: 'Painel Administrativo',
    children: [
      {
        path: 'clientes/listar',
        title: 'Painel - Clientes',
        component: ListarClienteComponent,
      },
      {
        path: 'clientes/cadastrar',
        component: CadastrarClienteComponent,
        title: 'Painel - Clientes',
      },
      {
        path: 'clientes/editar/:id',
        component: AtualizarClienteComponent,
        title: 'Painel - Clientes',
      },
      {
        path: 'clientes/deletar/:id',
        component: DeletarComponenteComponent,
        title: 'Painel - Clientes',
      },

      // Produtos

      {
        path: 'produtos/listar',
        title: 'Painel - Produtos',
        component: ProdutosComponent,
      }
    ],
  },
] as Routes;
