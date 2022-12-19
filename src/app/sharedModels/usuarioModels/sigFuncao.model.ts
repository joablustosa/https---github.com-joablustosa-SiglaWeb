export class SigFuncao {
  constructor(
    codfuncao: string,
    descrfuncao: string,
    modulo: string,
    grupo: string,
    menu: string,
    icone: string,
    rota: string,
    flgativo: string,
  ) {

  }
}

export class FuncaoAutoComplete {
  codfuncao!: string;
  descrfuncao!: string;
  modulo!: string;
  grupo!: string;
  menu!: string;
  icone!: string;
  rota!: string;
  flgativo!: string;
}


export interface Modulo {
  modulo: string;
  children?: Grupos[];
}

export interface Grupos {
  grupo: string;
  children: Funcao[];
}

export interface Funcao {
  codfuncao: string;
  descrfuncao: string;
  menu: string;
  icone: string;
  rota: string;
  flgativo: string;
}

