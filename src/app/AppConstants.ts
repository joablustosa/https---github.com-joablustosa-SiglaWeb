export class AppConstants{

  public static get baseServidor(): string { return "http://mplan01.infrananuvem.com.br:8099/" }
  // public static get baseServidor(): string { return "https://localhost:44311/" }

  // Login
  public static get baseLogin(): string{ return this.baseServidor + 'api/Login/v1'}

  // Tripulantes
  public static get baseTripulante(): string{ return this.baseServidor + 'api/Tripulantes/v1'}

  // Consulta liberacoes
  public static get baseLiberacoesPendentes(): string{ return this.baseServidor + 'api/ConsultaLiberacoesPendentes/v1'}

  // Relatorios
  public static get baseRelatorioAlteracaoVeiculo(): string{ return this.baseServidor + 'api/Relatorios/v1/AlteracaoVeiculo'}
  public static get baseRelatoriosUsuarios(): string{ return this.baseServidor + 'api/RelatoriosUsuarios/v1/LogUsuarios'}
  public static get baseRelatorioCelular(): string{ return this.baseServidor + 'api/Relatorios/v1/Celular'}
  public static get baseRelatorioAvariaCelular(): string{ return this.baseServidor + 'api/Relatorios/v1/RegistroAvariaCelular'}

  // Atualizacao de senha
  public static get baseSigUsuariosAtualizaSenha(): string{ return this.baseServidor + 'api/SigUsuarios/v1/AtualizaNovaSenha'}

  // Selects
  public static get baseRelatorioAeronave(): string{ return this.baseServidor + 'api/Selects/v1/Aeronave'}
  public static get baseRelatorioAtividade(): string{ return this.baseServidor + 'api/Selects/v1/Atividade'}
  public static get baseRelatorioBaseOperacional(): string{ return this.baseServidor + 'api/Selects/v1/BaseOperacional'}
  public static get baseRelatorioJustificativa(): string{ return this.baseServidor + 'api/Selects/v1/Justificativa'}
  public static get baseRelatorioNop(): string{ return this.baseServidor + 'api/Selects/v1/Nop'}
  public static get baseRelatorioRegional(): string{ return this.baseServidor + 'api/Selects/v1/Regional'}
  public static get baseRelatorioRegionalNop(): string{ return this.baseServidor + 'api/Selects/v1/RegionalComNop'}
  public static get baseRelatorioSiglaOrigem(): string{ return this.baseServidor + 'api/Selects/v1/SiglaOrigem'}
  public static get baseRelatorioSiglaDestino(): string{ return this.baseServidor + 'api/Selects/v1/SiglaDestino'}
  public static get baseRelatorioSiglaLocal(): string{ return this.baseServidor + 'api/Selects/v1/SiglaLocal'}
  public static get baseRelatorioCargo(): string{ return this.baseServidor + 'api/Selects/v1/Cargo'}
  public static get baseRelatorioTripulante(): string{ return this.baseServidor + 'api/Selects/v1/Tripulante'}

  public static get baseEmpresa(): string{ return this.baseServidor + 'api/ContatoEmpresas/v1'}
  public static get basePerguntas(): string{ return this.baseServidor + 'api/Perguntas/v1'}
  public static get basePerguntasByNivel(): string{ return this.baseServidor + 'api/Perguntas/v1/Nivel'}
  public static get baseSimulador(): string{ return this.baseServidor + 'api/Simuladores/v1'}
  public static get baseSimuladorResultado(): string{ return this.baseServidor + 'api/SimuladorResultados/v1'}
  public static get baseWebview(): string{ return this.baseServidor + 'api/Webviews/v1'}

  public static get baseSigUsuario(): string{ return this.baseServidor + 'api/SigUsuarios/v1'}
  public static get baseSigUsuarioLocais(): string{ return this.baseServidor + 'api/SigUsuarioLocalLocais/v1'}
  public static get baseSigUsuarios(): string{ return this.baseServidor + 'api/SigUsuarios/v1/Usuarios'}
  public static get baseSigUsuarioDesativa(): string{ return this.baseServidor + 'api/SigUsuarios/v1/Desativa'}
  public static get baseSigUsuarioResetSenha(): string{ return this.baseServidor + 'api/SigUsuarios/v1/ResetSenha'}
  public static get baseSigUsuarioGrupos(): string{ return this.baseServidor + 'api/SigUsuarioGrupos/v1'}
  public static get baseSigPerfis(): string{ return this.baseServidor + 'api/SigPerfis/v1'}
  public static get baseSigFuncoes(): string{ return this.baseServidor + 'api/SigFuncoes/v1'}
  public static get baseSigPerfilFuncoes(): string{ return this.baseServidor + 'api/SigPerfilFuncoes/v1'}

  public static get baseRelatorioLogUsuario(): string{ return this.baseServidor + 'api/RelatoriosUsuarios/v1/GetLogUsuarios'}
  public static get baseRelatorioUsuarioFuncao(): string{ return this.baseServidor + 'api/RelatoriosUsuarios/v1/GetUsuarioFuncao'}
  public static get baseRelatorioUsuarioPerfil(): string{ return this.baseServidor + 'api/RelatoriosUsuarios/v1/GetUsuarioPerfil'}

  public static get basePortalMotoristas(): string{ return this.baseServidor + 'api/Jornadas/v1'}
  public static get baseVisualizaJornadas(): string{ return this.baseServidor + 'api/VisualizaJornadas/v1'}
  public static get baseMensagens(): string{ return this.baseServidor + 'api/Mensagens/v1'}

  public static get basePartidas(): string{ return this.baseServidor + 'api/PartidasChegadas/v1/Partidas'}
  public static get baseChegadas(): string{ return this.baseServidor + 'api/PartidasChegadas/v1/Chegadas'}
}
