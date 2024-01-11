export class Produto {
  id: number;
  produto: string;
  preco: number;
  descricao: string;
  foto: string;

  constructor(id:number, produto:string, preco:number, descricao:string, foto:string)
  {
    this.id = id;
    this.produto = produto;
    this.preco = preco;
    this.descricao = descricao;
    this.foto = foto;
  }
}
