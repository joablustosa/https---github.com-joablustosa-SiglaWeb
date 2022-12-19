export class SigUsuario {
  constructor(
    sequsuario: string,
    usuario: string,
    nome: string,
    senha: string,
    flgaltera: string,
    versaoatual: string,
    ultlogin: string,
    ultlogout: string,
    seqgrupo: string,
    flgativo: string,
    coordzoomhor: string,
    coordzoomver: string,
    coordtamarea1: string,
    coordtamarea2: string,
    direstat: string,
    dirplanej: string,
    seqregional: string,
    seqnop: string,
    email: string,
    cpf: string,
    matricula: string,
    dthrinativado: string,
    dthralteracao: string,
    descrcargo: string
  ) {}
}

export class SigUsuarioEdit {
  sequsuario!: number;
  usuario!: string;
  nome!: string;
  senha!: string;
  flgaltera!: string;
  versaoatual!: string;
  ultlogin!: string;
  ultlogout!: string;
  seqgrupo!: number;
  flgativo!: string;
  coordzoomhor!: string;
  coordzoomver!: string;
  coordtamarea1!: string;
  coordtamarea2!: string;
  direstat!: string;
  dirplanej!: string;
  seqregional!: number;
  seqnop!: number;
  email!: string;
  cpf!: number;
  matricula!: string;
  dthrinativado!: string;
  dthralteracao!: string;
  descrcargo!: string;
}

export class SigUsuarioPerfil {
  sequsuario!: string;
  seqperfil!: string;
  descrperfil!: string;
}

export class SigUsuarioFuncao {
  sequsuario!: string;
  codfuncao!: string;
  descrfuncao!: string;
  modulo!: string;
  grupo!: string;
  menu!: string;
  rota!: string;
  flgativo!: string;
}

// TEM PERMISSÃO
export class SigFuncaoUsuario {
  sequsuario!: number;
  codfuncao!: string;
  flgpermissao!: string;
  contador!: number;
}

export class SigPerfilUsuario {
  sequsuario!: number;
  seqperfil!: number;
}

export class SigGrupoUsuario {
  sequsuario!: string;
  seqgrupo!: string;
}
