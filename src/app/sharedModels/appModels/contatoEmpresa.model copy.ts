import { DatePipe } from '@angular/common';

export class ContatoEmpresa{
  constructor(
    public id: number,
    public contatoSetor: String,
    public numeroContato: String,
    public responsavel: String,
    public funcionamento: String,
  ){

  }
}
