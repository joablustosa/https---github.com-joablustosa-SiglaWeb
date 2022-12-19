import { DatePipe } from '@angular/common';

export class Simulador{
  constructor(
    public id: number,
    public nome: string,
    public tipo: string,
    public responsavel: string,
    public dataCriacao: Date,
    public status: string
  ){

  }
}
