import { DatePipe, DecimalPipe, Time } from '@angular/common';

export class SimuladorResultado{
  constructor(
    public id: number,
    public idPergunta: number,
    public seqTripulante: number,
    public nivel: number,
    public resposta: number,
    public ponto: number,
    public dataHora: DatePipe,
  ){

  }
}
