export interface Tripulante{
        Id: string;
        cpf: string;
        senha: string;
        dominio: string;
        Usuario: string;
        nome: string;
        flgaltera: string;
        sequencial: string;
        nomeguerra: string;
        telefone1: string;
        telefone2: string;
        telefone3: string;
        telefone4: string;
        telefone5: string;
        email: string;
        matricula: string;
        Menus: Menu[];
}

export interface Menu{
    grupo_funcao: string;
    codigo_funcao: string;
    descricao_funcao: string;
    permissao_consulta: string;
    permissao_gravacao: string;
    modulo: string;
    grupo: string;
    menu: string;
    icone: string;
    rota: string;
    flgativo: string;
}