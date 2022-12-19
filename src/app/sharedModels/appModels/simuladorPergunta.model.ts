import { DatePipe } from '@angular/common';

export class SimuladorPergunta{
  constructor(
    public id: number,
    public titulo: String,
    public descricao: String,
    public imagem: String,
    public categoria: String,
    public opcao1: String,
    public opcao2: String,
    public opcao3: String,
    public resposta: String,
    public ponto: number,
    public idNivel: number,
    public status: number
  ){

  }
}
