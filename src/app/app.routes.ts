import { RouterModule, Routes } from '@angular/router';
import { CadastroFusoHorarioComponent } from './coordenacao/cadastro-fuso-horario/cadastro-fuso-horario.component';
import { CoordenacaoCadastroAreaResponsavelComponent } from './coordenacao/cadastro/coordenacao-cadastro-area-responsavel/coordenacao-cadastro-area-responsavel.component';
import { CoordenacaoCadastroCidadeComponent } from './coordenacao/cadastro/coordenacao-cadastro-cidade/coordenacao-cadastro-cidade.component';
import { CoordenacaoCadastroClasseLinhaComponent } from './coordenacao/cadastro/coordenacao-cadastro-classe-linha/coordenacao-cadastro-classe-linha.component';
import { CoordenacaoCadastroComponenteVeiculoComponent } from './coordenacao/cadastro/coordenacao-cadastro-componente-veiculo/coordenacao-cadastro-componente-veiculo.component';
import { CoordenacaoCadastroDistanciaComponent } from './coordenacao/cadastro/coordenacao-cadastro-distancia/coordenacao-cadastro-distancia.component';
import { CoordenacaoCadastroFrotaComponent } from './coordenacao/cadastro/coordenacao-cadastro-frota/coordenacao-cadastro-frota.component';
import { CoordenacaoCadastroGrupoLinhaComponent } from './coordenacao/cadastro/coordenacao-cadastro-grupo-linha/coordenacao-cadastro-grupo-linha.component';
import { CoordenacaoCadastroGrupoLocalComponent } from './coordenacao/cadastro/coordenacao-cadastro-grupo-local/coordenacao-cadastro-grupo-local.component';
import { CoordenacaoCadastroIntervaloAtrasoComponent } from './coordenacao/cadastro/coordenacao-cadastro-intervalo-atraso/coordenacao-cadastro-intervalo-atraso.component';
import { CoordenacaoCadastroJustificativaComponent } from './coordenacao/cadastro/coordenacao-cadastro-justificativa/coordenacao-cadastro-justificativa.component';
import { CoordenacaoCadastroLinhaComponent } from './coordenacao/cadastro/coordenacao-cadastro-linha/coordenacao-cadastro-linha.component';
import { CoordenacaoCadastroLocalReferenciaComponent } from './coordenacao/cadastro/coordenacao-cadastro-local-referencia/coordenacao-cadastro-local-referencia.component';
import { CoordenacaoCadastroLocalComponent } from './coordenacao/cadastro/coordenacao-cadastro-local/coordenacao-cadastro-local.component';
import { CoordenacaoCadastroNucleoOperacionalComponent } from './coordenacao/cadastro/coordenacao-cadastro-nucleo-operacional/coordenacao-cadastro-nucleo-operacional.component';
import { CoordenacaoCadastroPaisComponent } from './coordenacao/cadastro/coordenacao-cadastro-pais/coordenacao-cadastro-pais.component';
import { CoordenacaoCadastroParametroEmpresaComponent } from './coordenacao/cadastro/coordenacao-cadastro-parametro-empresa/coordenacao-cadastro-parametro-empresa.component';
import { CoordenacaoCadastroPedagioComponent } from './coordenacao/cadastro/coordenacao-cadastro-pedagio/coordenacao-cadastro-pedagio.component';
import { CoordenacaoCadastroRegiaoMetropolitanaComponent } from './coordenacao/cadastro/coordenacao-cadastro-regiao-metropolitana/coordenacao-cadastro-regial-metropolitana.component';
import { CoordenacaoCadastroServicosUnificadosComponent } from './coordenacao/cadastro/coordenacao-cadastro-servicos-unificados/coordenacao-cadastro-servicos-unificados.component';
import { CoordenacaoCadastroTempoParadaComponent } from './coordenacao/cadastro/coordenacao-cadastro-tempo-parada/coordenacao-cadastro-tempo-parada.component';
import { CoordenacaoCadastroTipoAtividadeVeiculoComponent } from './coordenacao/cadastro/coordenacao-cadastro-tipo-atividade-veiculo/coordenacao-cadastro-tipo-atividade-veiculo.component';
import { CoordenacaoCadastroTipoDocumentoComponent } from './coordenacao/cadastro/coordenacao-cadastro-tipo-documento/coordenacao-cadastro-tipo-documento.component';
import { CoordenacaoCadastroTipoServicoComponent } from './coordenacao/cadastro/coordenacao-cadastro-tipo-servico/coordenacao-cadastro-tipo-servico.component';
import { CoordenacaoCadastroUnidadeNegocioComponent } from './coordenacao/cadastro/coordenacao-cadastro-unidade-negocio/coordenacao-cadastro-unidade-negocio.component';
import { CoordenacaoCadastroValorFusoHorarioComponent } from './coordenacao/cadastro/coordenacao-cadastro-valor-fuso-horario/coordenacao-cadastro-valor-fuso-horario.component';
import { CoordenacaoCadastroValorPedagioComponent } from './coordenacao/cadastro/coordenacao-cadastro-valor-pedagio/coordenacao-cadastro-valor-pedagio.component';
import { CoordenacaoCadastroVeiculoManutencaoComponent } from './coordenacao/cadastro/coordenacao-cadastro-veiculo-manutencao/coordenacao-cadastro-veiculo-manutencao.component';
import { CoordenacaoCadastroVeiculoComponent } from './coordenacao/cadastro/coordenacao-cadastro-veiculo/coordenacao-cadastro-veiculo.component';
import { CombustivelDistribuidorComponent } from './coordenacao/combustivel/combustivel-distribuidor/combustivel-distribuidor.component';
import { CombustivelPeriodoAbastecimentoComponent } from './coordenacao/combustivel/combustivel-periodo-abastecimento/combustivel-periodo-abastecimento.component';
import { CombustivelRegistroAbastecimentoComponent } from './coordenacao/combustivel/combustivel-registro-abastecimento/combustivel-registro-abastecimento.component';
import { CombustivelSondagemCombustivelComponent } from './coordenacao/combustivel/combustivel-sondagem-combustivel/combustivel-sondagem-combustivel.component';
import { CombustivelValorCombustivelComponent } from './coordenacao/combustivel/combustivel-valor-combustivel/combustivel-valor-combustivel.component';
import { CoordenacaoComponent } from './coordenacao/coordenacao.component';
import { CoordenacaoConsultaOcupacaoComponent } from './coordenacao/coordenacao/coordenacao-consulta-ocupacao/coordenacao-consulta-ocupacao.component';
import { CoordenacaoFechamentoPeriodoComponent } from './coordenacao/coordenacao/coordenacao-fechamento-periodo/coordenacao-fechamento-periodo.component';
import { CoordenacaoGeracaoServicoComponent } from './coordenacao/coordenacao/coordenacao-geracao-servico/coordenacao-geracao-servico.component';
import { CoordenacaoIntegracaoVeltecComponent } from './coordenacao/coordenacao/coordenacao-integracao-veltec/coordenacao-integracao-veltec.component';
import { CoordenacaoProjetoSistransComponent } from './coordenacao/coordenacao/coordenacao-projeto-sistrans/coordenacao-projeto-sistrans.component';
import { CoordenacaoRegistroTecnicoComponent } from './coordenacao/coordenacao/coordenacao-registro-tecnico/coordenacao-registro-tecnico.component';
import { CoordenacaoServicoDiaComponent } from './coordenacao/coordenacao/coordenacao-servico-dia/coordenacao-servico-dia.component';
import { ConexaoCadastroComponent } from './coordenacao/planejamento/conexao-cadastro/conexao-cadastro.component';
import { ConexaoExclusaoComponent } from './coordenacao/planejamento/conexao-exclusao/conexao-exclusao.component';
import { ConexaoGeracaoComponent } from './coordenacao/planejamento/conexao-geracao/conexao-geracao.component';
import { ConexaoProibitivaComponent } from './coordenacao/planejamento/conexao-proibitiva/conexao-proibitiva.component';
import { ConexaoRelatorioComponent } from './coordenacao/planejamento/conexao-relatorio/conexao-relatorio.component';
import { PlanejamentoAtualizacaoTrilhoExecucaoComponent } from './coordenacao/planejamento/planejamento-atualizacao-trilho-execucao/planejamento-atualizacao-trilho-execucao.component';
import { PlanejamentoCenarioComponent } from './coordenacao/planejamento/planejamento-cenario/planejamento-cenario.component';
import { PlanejamentoCopiaCenarioComponent } from './coordenacao/planejamento/planejamento-copia-cenario/planejamento-copia-cenario.component';
import { PlanejamentoMalhaViagemComponent } from './coordenacao/planejamento/planejamento-malha-viagem/planejamento-malha-viagem.component';
import { PlanejamentoOtimizacaoComponent } from './coordenacao/planejamento/planejamento-otimizacao/planejamento-otimizacao.component';
import { PlanejamentoRenovacaoExclusividadeComponent } from './coordenacao/planejamento/planejamento-renovacao-exclusividade/planejamento-renovacao-exclusividade.component';
import { PlanejamentoViagemPlanejadaComponent } from './coordenacao/planejamento/planejamento-viagem-planejada/planejamento-viagem-planejada.component';
import { PlanejamentoVigenciaCenarioComponent } from './coordenacao/planejamento/planejamento-vigencia-cenario/planejamento-vigencia-cenario.component';
import { CoordenacaoRelatorioAnaliseMalhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-analise-malha/coordenacao-relatorio-analise-malha.component';
import { CoordenacaoRelatorioAreaResponsavelComponent } from './coordenacao/relatorio/coordenacao-relatorio-area-responsavel/coordenacao-relatorio-area-responsavel.component';
import { CoordenacaoRelatorioAtividadeVeiculoComponent } from './coordenacao/relatorio/coordenacao-relatorio-atividade-veiculo/coordenacao-relatorio-atividade-veiculo.component';
import { CoordenacaoRelatorioChegadaProximaPartidaComponent } from './coordenacao/relatorio/coordenacao-relatorio-chegada-proxima-partida/coordenacao-relatorio-chegada-proxima-partida.component';
import { CoordenacaoRelatorioCidadeComponent } from './coordenacao/relatorio/coordenacao-relatorio-cidade/coordenacao-relatorio-cidade.component';
import { CoordenacaoRelatorioClasseLinhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-classe-linha/coordenacao-relatorio-classe-linha.component';
import { CoordenacaoRelatorioComponenteVeiculoComponent } from './coordenacao/relatorio/coordenacao-relatorio-componente-veiculo/coordenacao-relatorio-componente-veiculo.component';
import { CoordenacaoRelatorioConexaoCenarioComponent } from './coordenacao/relatorio/coordenacao-relatorio-conexao-cenario/coordenacao-relatorio-conexao-cenario.component';
import { CoordenacaoRelatorioConexaoServicoComponent } from './coordenacao/relatorio/coordenacao-relatorio-conexao-servico/coordenacao-relatorio-conexao-servico.component';
import { CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent } from './coordenacao/relatorio/coordenacao-relatorio-deslocamento-horario-planejado/coordenacao-relatorio-deslocamento-horario-planejado.component';
import { CoordenacaoRelatorioDiscrepanciaPrevisaoComponent } from './coordenacao/relatorio/coordenacao-relatorio-discrepancia-previsao/coordenacao-relatorio-discrepancia-previsao.component';
import { CoordenacaoRelatorioDistanciaComponent } from './coordenacao/relatorio/coordenacao-relatorio-distancia/coordenacao-relatorio-distancia.component';
import { CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent } from './coordenacao/relatorio/coordenacao-relatorio-divergencia-planejamento-execucao/coordenacao-relatorio-divergencia-planejamento-execucao.component';
import { CoordenacaoRelatorioFrotaComponent } from './coordenacao/relatorio/coordenacao-relatorio-frota/coordenacao-relatorio-frota.component';
import { CoordenacaoRelatorioFusoHorarioComponent } from './coordenacao/relatorio/coordenacao-relatorio-fuso-horario/coordenacao-relatorio-fuso-horario.component';
import { CoordenacaoRelatorioGrupoLinhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-grupo-linha/coordenacao-relatorio-grupo-linha.component';
import { CoordenacaoRelatorioIntervaloAtrasoComponent } from './coordenacao/relatorio/coordenacao-relatorio-intervalo-atraso/coordenacao-relatorio-intervalo-atraso.component';
import { CoordenacaoRelatorioJustificativaInternaComponent } from './coordenacao/relatorio/coordenacao-relatorio-justificativa-interna/coordenacao-relatorio-justificativa-interna.component';
import { CoordenacaoRelatorioJustificativaComponent } from './coordenacao/relatorio/coordenacao-relatorio-justificativa/coordenacao-relatorio-justificativa.component';
import { CoordenacaoRelatorioLinhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-linha/coordenacao-relatorio-linha.component';
import { CoordenacaoRelatorioLocalReferenciaComponent } from './coordenacao/relatorio/coordenacao-relatorio-local-referencia/coordenacao-relatorio-local-referencia.component';
import { CoordenacaoRelatorioLocalComponent } from './coordenacao/relatorio/coordenacao-relatorio-local/coordenacao-relatorio-local.component';
import { CoordenacaoRelatorioMalhaTextoComponent } from './coordenacao/relatorio/coordenacao-relatorio-malha-texto/coordenacao-relatorio-malha-texto.component';
import { CoordenacaoRelatorioMalhaViagemComponent } from './coordenacao/relatorio/coordenacao-relatorio-malha-viagem/coordenacao-relatorio-malha-viagem.component';
import { CoordenacaoRelatorioNucleoOperacionalComponent } from './coordenacao/relatorio/coordenacao-relatorio-nucleo-operacional/coordenacao-relatorio-nucleo-operacional.component';
import { CoordenacaoRelatorioOperacaoFretamentoComponent } from './coordenacao/relatorio/coordenacao-relatorio-operacao-fretamento/coordenacao-relatorio-operacao-fretamento.component';
import { CoordenacaoRelatorioPaisComponent } from './coordenacao/relatorio/coordenacao-relatorio-pais/coordenacao-relatorio-pais.component';
import { CoordenacaoRelatorioParametroEmpresaComponent } from './coordenacao/relatorio/coordenacao-relatorio-parametro-empresa/coordenacao-relatorio-parametro-empresa.component';
import { CoordenacaoRelatorioPedidoCombustivelComponent } from './coordenacao/relatorio/coordenacao-relatorio-pedido-combustivel/coordenacao-relatorio-pedido-combustivel.component';
import { CoordenacaoRelatorioPrevisaoCombustivelComponent } from './coordenacao/relatorio/coordenacao-relatorio-previsao-combustivel/coordenacao-relatorio-previsao-combustivel.component';
import { CoordenacaoRelatorioQuantitativoInicioFimComponent } from './coordenacao/relatorio/coordenacao-relatorio-quantitativo-inicio-fim/coordenacao-relatorio-quantitativo-inicio-fim.component';
import { CoordenacaoRelatorioRegiaoMetropolitanaComponent } from './coordenacao/relatorio/coordenacao-relatorio-regiao-metropolitana/coordenacao-relatorio-regiao-metropolitana.component';
import { CoordenacaoRelatorioRegionalComponent } from './coordenacao/relatorio/coordenacao-relatorio-regional/coordenacao-relatorio-regional.component';
import { CoordenacaoRelatorioRegistroAbastecimentoComponent } from './coordenacao/relatorio/coordenacao-relatorio-registro-abastecimento/coordenacao-relatorio-registro-abastecimento.component';
import { CoordenacaoRelatorioServicosUnificadosComponent } from './coordenacao/relatorio/coordenacao-relatorio-servicos-unificados/coordenacao-relatorio-servicos-unificados.component';
import { CoordenacaoRelatorioTempoParadaComponent } from './coordenacao/relatorio/coordenacao-relatorio-tempo-parada/coordenacao-relatorio-tempo-parada.component';
import { CoordenacaoRelatorioTempoPedagioComponent } from './coordenacao/relatorio/coordenacao-relatorio-tempo-pedagio/coordenacao-relatorio-tempo-pedagio.component';
import { CoordenacaoRelatorioTipoDocumentoComponent } from './coordenacao/relatorio/coordenacao-relatorio-tipo-documento/coordenacao-relatorio-tipo-documento.component';
import { CoordenacaoRelatorioTipoServicoComponent } from './coordenacao/relatorio/coordenacao-relatorio-tipo-servico/coordenacao-relatorio-tipo-servico.component';
import { CoordenacaoRelatorioUnidadeNegocioComponent } from './coordenacao/relatorio/coordenacao-relatorio-unidade-negocio/coordenacao-relatorio-unidade-negocio.component';
import { CoordenacaoRelatorioValidacaoCenarioVigenteComponent } from './coordenacao/relatorio/coordenacao-relatorio-validacao-cenario-vigente/coordenacao-relatorio-validacao-cenario-vigente.component';
import { CoordenacaoRelatorioValorCombustivelComponent } from './coordenacao/relatorio/coordenacao-relatorio-valor-combustivel/coordenacao-relatorio-valor-combustivel.component';
import { CoordenacaoRelatorioValorFusoHorarioComponent } from './coordenacao/relatorio/coordenacao-relatorio-valor-fuso-horario/coordenacao-relatorio-valor-fuso-horario.component';
import { CoordenacaoRelatorioValorPedagioComponent } from './coordenacao/relatorio/coordenacao-relatorio-valor-pedagio/coordenacao-relatorio-valor-pedagio.component';
import { CoordenacaoRelatorioVeiculoManutencaoComponent } from './coordenacao/relatorio/coordenacao-relatorio-veiculo-manutencao/coordenacao-relatorio-veiculo-manutencao.component';
import { CoordenacaoRelatorioVeiculoComponent } from './coordenacao/relatorio/coordenacao-relatorio-veiculo/coordenacao-relatorio-veiculo.component';
import { CoordenacaoRelatorioViagemPlanejadaAnaliseComponent } from './coordenacao/relatorio/coordenacao-relatorio-viagem-planejada-analise/coordenacao-relatorio-viagem-planejada-analise.component';
import { CoordenacaoRelatorioViagemPlanejadaLocalComponent } from './coordenacao/relatorio/coordenacao-relatorio-viagem-planejada-local/coordenacao-relatorio-viagem-planejada-local.component';
import { CoordenacaoRelatorioViagemPlanejadaComponent } from './coordenacao/relatorio/coordenacao-relatorio-viagem-planejada/coordenacao-relatorio-viagem-planejada.component';
import { AtividadePagamentoComponent } from './escala/cadastro/escala-cadastro-atividade-pagamento/atividade-pagamento.component';
import { AtividadeTripulanteComponent } from './escala/cadastro/escala-cadastro-atividade-tripulante/atividade-tripulante.component';
import { BaseTripulanteComponent } from './escala/cadastro/escala-cadastro-base-tripulante/base-tripulante.component';
import { CargoPorFrotaComponent } from './escala/cadastro/escala-cadastro-cargo-por-frota/cargo-por-frota.component';
import { CargoTripulanteComponent } from './escala/cadastro/escala-cadastro-cargo-tripulante/cargo-tripulante.component';
import { CarteiraLinhaComponent } from './escala/cadastro/escala-cadastro-carteira-linha/carteira-linha.component';
import { CarteiraTripulanteComponent } from './escala/cadastro/escala-cadastro-carteira-tripulante/carteira-tripulante.component';
import { CentroCustoComponent } from './escala/cadastro/escala-cadastro-centro-custo/centro-custo.component';
import { ContatoComponent } from './escala/cadastro/escala-cadastro-contato/contato.component';
import { EscalaCadastroDadoGeralTripulanteComponent } from './escala/cadastro/escala-cadastro-dado-geral-tripulante/escala-cadastro-dado-geral-tripulante.component';
import { ExameConsultaComponent } from './escala/cadastro/escala-cadastro-exame-consulta/exame-consulta.component';
import { FeriadoComponent } from './escala/cadastro/escala-cadastro-feriado/feriado.component';
import { FrotaFuncaoComponent } from './escala/cadastro/escala-cadastro-frota-funcao/frota-funcao.component';
import { FuncaoBordoComponent } from './escala/cadastro/escala-cadastro-funcao-bordo/funcao-bordo.component';
import { FuncaoTripulanteComponent } from './escala/cadastro/escala-cadastro-funcao-tripulante/funcao-tripulante.component';
import { HabilitacaoHorarioComponent } from './escala/cadastro/escala-cadastro-habilitacao-horario/habilitacao-horario.component';
import { JustificativaInterjornadaComponent } from './escala/cadastro/escala-cadastro-justificativa-interjornada/justificativa-interjornada.component';
import { JustificativaTrocaTripulanteComponent } from './escala/cadastro/escala-cadastro-justificativa-troca-tripulante/justificativa-troca-tripulante.component';
import { ParadaTripulanteComponent } from './escala/cadastro/escala-cadastro-parada-tripulante/parada-tripulante.component';
import { ParametroEmpresaComponent } from './escala/cadastro/escala-cadastro-parametro-empresa/parametro-empresa.component';
import { PerfilTripulanteComponent } from './escala/cadastro/escala-cadastro-perfil-tripulante/perfil-tripulante.component';
import { PremiacaoBaseOperacionalComponent } from './escala/cadastro/escala-cadastro-premiacao-base-operacional/premiacao-base-operacional.component';
import { PremiacaoLinhaComponent } from './escala/cadastro/escala-cadastro-premiacao-linha/premiacao-linha.component';
import { RefeicaoViagemComponent } from './escala/cadastro/escala-cadastro-refeicao-viagem/refeicao-viagem.component';
import { RelogioPontoComponent } from './escala/cadastro/escala-cadastro-relogio-ponto/relogio-ponto.component';
import { RestricaoHorarioComponent } from './escala/cadastro/escala-cadastro-restricao-horario/restricao-horario.component';
import { SessaoLinhaComponent } from './escala/cadastro/escala-cadastro-sessao-linha/sessao-linha.component';
import { SindicatoComponent } from './escala/cadastro/escala-cadastro-sindicato/sindicato.component';
import { TempoApresentacaoComponent } from './escala/cadastro/escala-cadastro-tempo-apresentacao/tempo-apresentacao.component';
import { TipoDespesaComponent } from './escala/cadastro/escala-cadastro-tipo-despesa/tipo-despesa.component';
import { TipoExameComponent } from './escala/cadastro/escala-cadastro-tipo-exame/tipo-exame.component';
import { TipoRefeicaoComponent } from './escala/cadastro/escala-cadastro-tipo-refeicao/tipo-refeicao.component';
import { ValeTransporteComponent } from './escala/cadastro/escala-cadastro-vale-transporte/vale-transporte.component';
import { ValorSalarioComponent } from './escala/cadastro/escala-cadastro-valor-salario/valor-salario.component';
import { VencimentoExameComponent } from './escala/cadastro/escala-cadastro-vencimento-exame/vencimento-exame.component';
import { EscalaComponent } from './escala/escala.component';
import { GeracaoPagamentoComponent } from './escala/pagamento/geracao-pagamento/geracao-pagamento.component';
import { GeracaoPontoComponent } from './escala/pagamento/geracao-ponto/geracao-ponto.component';
import { PublicacaoPagamentoComponent } from './escala/pagamento/publicacao-pagamento/publicacao-pagamento.component';
import { ChaveServicoComponent } from './escala/planejamento/chave-servico/chave-servico.component';
import { ConexaoChaveComponent } from './escala/planejamento/conexao-chave/conexao-chave.component';
import { FechamentoPeriodoComponent } from './escala/planejamento/fechamento-periodo/fechamento-periodo.component';
import { FolhaoGraficoComponent } from './escala/planejamento/folhao-grafico/folhao-grafico.component';
import { PublicacaoEscalaComponent } from './escala/planejamento/publicacao-escala/publicacao-escala.component';
import { ServicoPlanejadoComponent } from './escala/planejamento/servico-planejado/servico-planejado.component';
import { AnaliseDigitacaoIntegracaoComponent } from './escala/relatorio/analise-digitacao-integracao/analise-digitacao-integracao.component';
import { AnomaliaInterjornadaComponent } from './escala/relatorio/anomalia-interjornada/anomalia-interjornada.component';
import { AproveitamentoTripulanteComponent } from './escala/relatorio/aproveitamento-tripulante/aproveitamento-tripulante.component';
import { AutomatizadoDigitadoComponent } from './escala/relatorio/automatizado-digitado/automatizado-digitado.component';
import { ComparacaoJornadaPrevistaComponent } from './escala/relatorio/comparacao-jornada-prevista/comparacao-jornada-prevista.component';
import { CompensacaoOperacionalComponent } from './escala/relatorio/compensacao-operacional/compensacao-operacional.component';
import { CustoTripulanteLinhaComponent } from './escala/relatorio/custo-tripulante-linha/custo-tripulante-linha.component';
import { DespesaTripulanteComponent } from './escala/relatorio/despesa-tripulante/despesa-tripulante.component';
import { DiferencaEscalaComponent } from './escala/relatorio/diferenca-escala/diferenca-escala.component';
import { EscalaGeralComponent } from './escala/relatorio/escala-geral/escala-geral.component';
import { EscalaTripulanteComponent } from './escala/relatorio/escala-tripulante/escala-tripulante.component';
import { FaltaComponent } from './escala/relatorio/falta/falta.component';
import { FolhaoDiarioComponent } from './escala/relatorio/folhao-diario/folhao-diario.component';
import { HoraAdicionalComponent } from './escala/relatorio/hora-adicional/hora-adicional.component';
import { HoraExtraComponent } from './escala/relatorio/hora-extra/hora-extra.component';
import { HoraTrabalhadaComponent } from './escala/relatorio/hora-trabalhada/hora-trabalhada.component';
import { IntegracaoBafometroComponent } from './escala/relatorio/integracao-bafometro/integracao-bafometro.component';
import { InterjornadaComponent } from './escala/relatorio/interjornada/interjornada.component';
import { JornadaComponent } from './escala/relatorio/jornada/jornada.component';
import { LogAlteracaoJornadaComponent } from './escala/relatorio/log-alteracao-jornada/log-alteracao-jornada.component';
import { MarcacaoComponent } from './escala/relatorio/marcacao/marcacao.component';
import { MotoristaComponent } from './escala/relatorio/motorista/motorista.component';
import { PagamentoComponent } from './escala/relatorio/pagamento/pagamento.component';
import { PernoiteComponent } from './escala/relatorio/pernoite/pernoite.component';
import { ProgramacaoAtividadeComponent } from './escala/relatorio/programacao-atividade/programacao-atividade.component';
import { RelatorioOcorrenciaComponent } from './escala/relatorio/relatorio-ocorrencia/relatorio-ocorrencia.component';
import { TempoDirecaoComponent } from './escala/relatorio/tempo-direcao/tempo-direcao.component';
import { TempoFolgaComponent } from './escala/relatorio/tempo-folga/tempo-folga.component';
import { UtilizacaoDiariaTripulanteComponent } from './escala/relatorio/utilizacao-diaria-tripulante/utilizacao-diaria-tripulante.component';
import { ValeRefeicaoComponent } from './escala/relatorio/vale-refeicao/vale-refeicao.component';
import { VencimentoCarteiraComponent } from './escala/relatorio/vencimento-carteira/vencimento-carteira.component';

import { InicioComponent } from './inicio/inicio.component';
import { CadastroCelularComponent } from './liberacao/cadastro/cadastro-celular/cadastro-celular.component';
import { JustificativaComponent } from './liberacao/cadastro/justificativa/justificativa.component';
import { MotivoBaixaComponent } from './liberacao/cadastro/motivo-baixa/motivo-baixa.component';
import { MotivoLiberacaoComponent } from './liberacao/cadastro/motivo-liberacao/motivo-liberacao.component';
import { RegistroAvariaComponent } from './liberacao/cadastro/registro-avaria/registro-avaria.component';
import { TipoAvariaComponent } from './liberacao/cadastro/tipo-avaria/tipo-avaria.component';
import { LiberacaoComponent } from './liberacao/liberacao.component';
import { RegistroOcorrenciaComponent } from './liberacao/ocorrencia/registro-ocorrencia/registro-ocorrencia.component';
import { AvaliarComponent } from './liberacao/ponto/avaliar/avaliar.component';
import { LiberacaoFechamentoPeriodoComponent } from './liberacao/ponto/fechamento-periodo/fechamento-periodo.component';
import { ImportacaoDatasulComponent } from './liberacao/ponto/importacao-datasul/importacao-datasul.component';
import { RegistrarComponent } from './liberacao/ponto/registrar/registrar.component';
import { RelatorioTotalizadorAtividadeComponent } from './liberacao/relatorio/relatorio-totalizador-atividade/relatorio-totalizador-atividade.component';
import { AlteracaoVeiculoComponent } from './liberacao/relatorio/alteracao-veiculo/alteracao-veiculo.component';
import { ApresentacaoTripulanteComponent } from './liberacao/relatorio/apresentacao-tripulante/apresentacao-tripulante.component';
import { AvariaCelularComponent } from './liberacao/relatorio/avaria-celular/avaria-celular.component';
import { CelularComponent } from './liberacao/relatorio/celular/celular.component';
import { ChegadaTripulanteComponent } from './liberacao/relatorio/chegada-tripulante/chegada-tripulante.component';
import { FolgaComponent } from './liberacao/relatorio/folga/folga.component';
import { MovimentacaoCelularComponent } from './liberacao/relatorio/movimentacao-celular/movimentacao-celular.component';
import { LiberacaoOcorrenciaComponent } from './liberacao/relatorio/ocorrencia/ocorrencia.component';
import { PartidaTripulanteComponent } from './liberacao/relatorio/partida-tripulante/partida-tripulante.component';
import { PontoComponent } from './liberacao/relatorio/ponto/ponto.component';
import { RelatorioEscalaComponent } from './liberacao/relatorio/relatorio-escala/relatorio-escala.component';
import { RelatorioLiberacaoComponent } from './liberacao/relatorio/relatorio-liberacao/relatorio-liberacao.component';
import { TotalizadorViagemComponent } from './liberacao/relatorio/totalizador-viagem/totalizador-viagem.component';
import { TripulanteSemPontoComponent } from './liberacao/relatorio/tripulante-sem-ponto/tripulante-sem-ponto.component';
import { ViradaVeiculoComponent } from './liberacao/relatorio/virada-veiculo/virada-veiculo.component';
import { LoginGuardGuard } from './login/login-guard.guard';
import { LoginComponent } from './login/login.component';
import { PartidasChegadasComponent } from './partidas-chegadas/partidas-chegadas.component';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro-usuario/cadastro-usuario.component';
import { GrupoComponent } from './usuario/cadastro/grupo/grupo.component';
import { PerfilComponent } from './usuario/cadastro/perfil/perfil.component';
import { UsuarioLocalComponent } from './usuario/cadastro/usuario-local/usuario-local.component';
import { LogUsuarioComponent } from './usuario/relatorio/log/log.component';
import { UsuarioFuncaoComponent } from './usuario/relatorio/usuario-funcao/usuario-funcao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PortalMotoristaComponent } from './portal-motorista/portal-motorista.component';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { SimuladorAnaliseComponent } from './admin-app/simulador/simulador-analise/simulador-analise.component';
import { SimuladorComponent } from './admin-app/simulador/simulador.component';
import { ItensSimuladorComponent } from './admin-app/simulador/itens-simulador/itens-simulador.component';
import { ContatoEmpresaComponent } from './admin-app/contato-empresa/contato-empresa.component';
import { PaginaWebviewComponent } from './admin-app/pagina-webview/pagina-webview.component';
import { EditaUsuarioComponent } from './usuario/cadastro/cadastro-usuario/edita-usuario/edita-usuario.component';
import { UsuarioPerfilComponent } from './usuario/relatorio/usuario-perfil/usuario-perfil.component';
import { NovoUsuarioComponent } from './usuario/cadastro/cadastro-usuario/novo-usuario/novo-usuario.component';
import { FuncaoPerfilComponent } from './usuario/cadastro/perfil/funcao-perfil/funcao-perfil.component';
import { ClonaUsuarioComponent } from './usuario/cadastro/cadastro-usuario/clona-usuario/clona-usuario.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacao',
    component: CoordenacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoconexaogeracao',
    component: ConexaoGeracaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoconexaoproibitiva',
    component: ConexaoProibitivaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoconexaoexclusao',
    component: ConexaoExclusaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoconexaocadastro',
    component: ConexaoCadastroComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoconexaorelatorio',
    component: ConexaoRelatorioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaogeracaoservico',
    component: CoordenacaoGeracaoServicoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaofechamentoperiodo',
    component: CoordenacaoFechamentoPeriodoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoconsultaocupacao',
    component: CoordenacaoConsultaOcupacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoprojetosistrans',
    component: CoordenacaoProjetoSistransComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaointegracaoveltec',
    component: CoordenacaoIntegracaoVeltecComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoservicodia',
    component: CoordenacaoServicoDiaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroarearesponsavel',
    component: CoordenacaoCadastroAreaResponsavelComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/coordenacaoregistrotecnico',
    component: CoordenacaoRegistroTecnicoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroatividadeveiculo',
    component: CoordenacaoCadastroComponenteVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrocidade',
    component: CoordenacaoCadastroCidadeComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroclasselinha',
    component: CoordenacaoCadastroClasseLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrocomponenteveiculo',
    component: CoordenacaoCadastroComponenteVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrodistancia',
    component: CoordenacaoCadastroDistanciaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrofrota',
    component: CoordenacaoCadastroFrotaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrogrupolinha',
    component: CoordenacaoCadastroGrupoLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrogrupolocal',
    component: CoordenacaoCadastroGrupoLocalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrointervaloatraso',
    component: CoordenacaoCadastroIntervaloAtrasoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrojustificativa',
    component: CoordenacaoCadastroJustificativaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrolinha',
    component: CoordenacaoCadastroLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrolocal',
    component: CoordenacaoCadastroLocalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrolocalreferencia',
    component: CoordenacaoCadastroLocalReferenciaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastronucleooperacional',
    component: CoordenacaoCadastroNucleoOperacionalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastropais',
    component: CoordenacaoCadastroPaisComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroparametroempresa',
    component: CoordenacaoCadastroParametroEmpresaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastropedagio',
    component: CoordenacaoCadastroPedagioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroregiaometropolitana',
    component: CoordenacaoCadastroRegiaoMetropolitanaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroservicosunificados',
    component: CoordenacaoCadastroServicosUnificadosComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrotempoparada',
    component: CoordenacaoCadastroTempoParadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrotipoatividadeveiculo',
    component: CoordenacaoCadastroTipoAtividadeVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrotipodocumento',
    component: CoordenacaoCadastroTipoDocumentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrotiposervico',
    component: CoordenacaoCadastroTipoServicoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrounidadenegocio',
    component: CoordenacaoCadastroUnidadeNegocioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrovalorfusohorario',
    component: CoordenacaoCadastroValorFusoHorarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrovalorpedagio',
    component: CoordenacaoCadastroValorPedagioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroveiculo',
    component: CoordenacaoCadastroVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastrofusohorario',
    component: CadastroFusoHorarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/cadastroveiculomanutencao',
    component: CoordenacaoCadastroVeiculoManutencaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/combustiveldistribuidor',
    component: CombustivelDistribuidorComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/combustivelperiodoabastecimento',
    component: CombustivelPeriodoAbastecimentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/combustivelregistroabastecimento',
    component: CombustivelRegistroAbastecimentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/combustivelsondagemcombustivel',
    component: CombustivelSondagemCombustivelComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/combustivelvalor',
    component: CombustivelValorCombustivelComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentoatualizacaotrilho',
     component: PlanejamentoAtualizacaoTrilhoExecucaoComponent,
     canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentocenario',
    component: PlanejamentoCenarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentocopiacenario',
    component: PlanejamentoCopiaCenarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentomalhaviagem',
    component: PlanejamentoMalhaViagemComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentootimizacao',
    component: PlanejamentoOtimizacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentorenovacaoexclusividade',
    component: PlanejamentoRenovacaoExclusividadeComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentoviagemplanejada',
    component: PlanejamentoViagemPlanejadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/planejamentovigenciacenario',
    component: PlanejamentoVigenciaCenarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioanalisemalha',
    component: CoordenacaoRelatorioAnaliseMalhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioarearesponsavel',
    component: CoordenacaoRelatorioAreaResponsavelComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioatividadeveiculo',
    component: CoordenacaoRelatorioAtividadeVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriochegadaproximapartida',
    component: CoordenacaoRelatorioChegadaProximaPartidaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriocidade',
    component: CoordenacaoRelatorioCidadeComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioclasselinha',
    component: CoordenacaoRelatorioClasseLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriocomponenteveiculo',
    component: CoordenacaoRelatorioComponenteVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioconexaocenario',
    component: CoordenacaoRelatorioConexaoCenarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioconexaoservico',
    component: CoordenacaoRelatorioConexaoServicoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriodeslocamentohorarioplanejado',
    component: CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriodiscrepanciaprevisao',
    component: CoordenacaoRelatorioDiscrepanciaPrevisaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriodistancia',
    component: CoordenacaoRelatorioDistanciaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriodivergenciaplanejamentoexecucao',
    component: CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriofrota',
    component: CoordenacaoRelatorioFrotaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriofusohorario',
    component: CoordenacaoRelatorioFusoHorarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriogrupolinha',
    component: CoordenacaoRelatorioGrupoLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriointervaloatraso',
    component: CoordenacaoRelatorioIntervaloAtrasoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriojustificativa',
    component: CoordenacaoRelatorioJustificativaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriojustificativainterna',
    component: CoordenacaoRelatorioJustificativaInternaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriolinha',
    component: CoordenacaoRelatorioLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriolocal',
    component: CoordenacaoRelatorioLocalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriolocalreferencia',
    component: CoordenacaoRelatorioLocalReferenciaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriomalhatexto',
    component: CoordenacaoRelatorioMalhaTextoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriomalhaviagem',
    component: CoordenacaoRelatorioMalhaViagemComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorionucleooperacional',
    component: CoordenacaoRelatorioNucleoOperacionalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriooperacaofretamento',
    component: CoordenacaoRelatorioOperacaoFretamentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriopais',
    component: CoordenacaoRelatorioPaisComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioparametroempresa',
    component: CoordenacaoRelatorioParametroEmpresaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriopedidocombustivel',
    component: CoordenacaoRelatorioPedidoCombustivelComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioprevisaocombustivel',
    component: CoordenacaoRelatorioPrevisaoCombustivelComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioquantitativoiniciofim',
    component: CoordenacaoRelatorioQuantitativoInicioFimComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioregiaometropolitana',
    component: CoordenacaoRelatorioRegiaoMetropolitanaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioregional',
    component: CoordenacaoRelatorioRegionalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioregistroabastecimento',
    component: CoordenacaoRelatorioRegistroAbastecimentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioservicosunificados',
    component: CoordenacaoRelatorioServicosUnificadosComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriotempoparada',
    component: CoordenacaoRelatorioTempoParadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriotempopedagio',
    component: CoordenacaoRelatorioTempoPedagioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriotipodocumento',
    component: CoordenacaoRelatorioTipoDocumentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriotiposervico',
    component: CoordenacaoRelatorioTipoServicoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriounidadenegocio',
    component: CoordenacaoRelatorioUnidadeNegocioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriovalidacaocenariovigente',
    component: CoordenacaoRelatorioValidacaoCenarioVigenteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriovalorcombustivel',
    component: CoordenacaoRelatorioValorCombustivelComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriovalorfusohorario',
    component: CoordenacaoRelatorioValorFusoHorarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatoriovalorpedagio',
    component: CoordenacaoRelatorioValorPedagioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioveiculo',
    component: CoordenacaoRelatorioVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioveiculomanutencao',
    component: CoordenacaoRelatorioVeiculoManutencaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioviagemplanejada',
    component: CoordenacaoRelatorioViagemPlanejadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioviagemplanejadaanalise',
    component: CoordenacaoRelatorioViagemPlanejadaAnaliseComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'coordenacao/relatorioviagemplanejadalocal',
    component: CoordenacaoRelatorioViagemPlanejadaLocalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala',
    component: EscalaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastroatividadepagamento',
    component: AtividadePagamentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastroatividadetripulate',
    component: AtividadeTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrobasetripulante',
    component: BaseTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrocargoporfrota',
    component: CargoPorFrotaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrocargotripulante',
    component: CargoTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrocarteiralinha',
    component: CarteiraLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrocarteiratripulante',
    component: CarteiraTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrocentrocusto',
    component: CentroCustoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrocontato',
    component: ContatoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastroexameconsulta',
    component: ExameConsultaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastroferiado',
    component: FeriadoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrofrotafuncao',
    component: FrotaFuncaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrofuncaobordo',
    component: FuncaoBordoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrofuncaotripulante',
    component: FuncaoTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrohabilitacaohorario',
    component: HabilitacaoHorarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrojustificativainterjornada',
    component: JustificativaInterjornadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrotrocatripulante',
    component: JustificativaTrocaTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastroparadatripulante',
    component: ParadaTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrodadogeraltripulante',
    component: EscalaCadastroDadoGeralTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/escalacadastroparametroempresa',
    component: ParametroEmpresaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastroperfiltripulante',
    component: PerfilTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastropremiacaobaseoperacional',
    component: PremiacaoBaseOperacionalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastropremiacaolinha',
    component: PremiacaoLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrorefeicaoviagem',
    component: RefeicaoViagemComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrorelogioponto',
    component: RelogioPontoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrorestricaohorario',
    component: RestricaoHorarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrosessaolinha',
    component: SessaoLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrosindicato',
    component: SindicatoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrotempoapresentacao',
    component: TempoApresentacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrotipodespesa',
    component: TipoDespesaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrotipoexame',
    component: TipoExameComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrotiporefeicao',
    component: TipoRefeicaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrovaletransporte',
    component: ValeTransporteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrovalorsalario',
    component: ValorSalarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/cadastrovencimentoexame',
    component: VencimentoExameComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/pagamentogeracaoponto',
    component: GeracaoPontoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/pagamentogeracaopagamento',
    component: GeracaoPagamentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/pagamentopublicacaopagamento',
    component: PublicacaoPagamentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/planejamentochaveservico',
    component: ChaveServicoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/planejamentoconexaochave',
    component: ConexaoChaveComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/planejamentofechamentoperiodo',
    component: FechamentoPeriodoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/planejamentofolhaografico',
    component: FolhaoGraficoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/planejamentopublicacaoescala',
    component: PublicacaoEscalaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/planejamentoservicoplanejado',
    component: ServicoPlanejadoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioanalisedigitacaointegracao',
    component: AnaliseDigitacaoIntegracaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioanomaliainterjornada',
    component: AnomaliaInterjornadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioaproveitamentotripulante',
    component: AproveitamentoTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioautomatizadodigitado',
    component: AutomatizadoDigitadoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriocomparacaojornadaprevista',
    component: ComparacaoJornadaPrevistaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriocompensacaooperacional',
    component: CompensacaoOperacionalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriocustotripulantelinha',
    component: CustoTripulanteLinhaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriodespesatripulante',
    component: DespesaTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriodiferencaescala',
    component: DiferencaEscalaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioescalageral',
    component: EscalaGeralComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioescalatripulante',
    component: EscalaTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriofalta',
    component: FaltaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriofolhaodiario',
    component: FolhaoDiarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriohoraadicional',
    component: HoraAdicionalComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriohoraextra',
    component: HoraExtraComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriohoratrabalhada',
    component: HoraTrabalhadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriointegracaobafometro',
    component: IntegracaoBafometroComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriointerjornada',
    component: InterjornadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriojornada',
    component: JornadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriologalteracaojornada',
    component: LogAlteracaoJornadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriomarcacao',
    component: MarcacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriomotorista',
    component: MotoristaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriopagamento',
    component: PagamentoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriopernoite',
    component: PernoiteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioprogramacaoatividade',
    component: ProgramacaoAtividadeComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioapresentacaotripulante',
    component: ApresentacaoTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriotempofolga',
    component: TempoFolgaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriojustificativainterjornada',
    component: JustificativaInterjornadaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioocorrencia',
    component: RelatorioOcorrenciaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioponto',
    component: PontoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriotempodirecao',
    component: TempoDirecaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriofolga',
    component: FolgaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatorioutilizacaodiariatripulante',
    component: UtilizacaoDiariaTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriovalerefeicao',
    component: ValeRefeicaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'escala/relatoriovencimentocarteira',
    component: VencimentoCarteiraComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao',
    component: LiberacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/cadastrocelular',
    component: CadastroCelularComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/cadastrojustificativa',
    component: JustificativaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/cadastromotivobaixa',
    component: MotivoBaixaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/cadastromotivoliberacao',
    component: MotivoLiberacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/cadastroregistroavaria',
    component: RegistroAvariaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/cadastrotipoavaria',
    component: TipoAvariaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/ocorrenciaregistroocorrencia',
    component: RegistroOcorrenciaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/pontoavaliar',
    component: AvaliarComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/pontofechamentoperiodo',
    component: LiberacaoFechamentoPeriodoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/pontoimportacaodatasul',
    component: ImportacaoDatasulComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/pontoregistrar',
    component: RegistrarComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatorioalteracaoveiculo',
    component: AlteracaoVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatorioapresentacaotripulante',
    component: ApresentacaoTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatorioavariacelular',
    component: AvariaCelularComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriocelular',
    component: CelularComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriochegadatripulante',
    component: ChegadaTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriofolga',
    component: FolgaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriomovimentacaocelular',
    component: MovimentacaoCelularComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/liberacaorelatorioocorrencia',
    component: LiberacaoOcorrenciaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriopartidatripulante',
    component: PartidaTripulanteComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatorioponto',
    component: PontoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriototalizadoratividade',
    component: RelatorioTotalizadorAtividadeComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatorioescala',
    component: RelatorioEscalaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatorioliberacao',
    component: RelatorioLiberacaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriototalizadorviagem',
    component: TotalizadorViagemComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatoriotripulantesemponto',
    component: TripulanteSemPontoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'liberacao/relatorioviradaveiculo',
    component: ViradaVeiculoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'usuario/cadastrousuario',
    component: CadastroUsuarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'usuario/cadastronovousuario',
    component: NovoUsuarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'usuario/editar/:id',
    component: EditaUsuarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'usuario/clonar/:id',
    component: ClonaUsuarioComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'funcao/editar/:id',
    component: FuncaoPerfilComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'usuario/cadastrogrupo',
    component: GrupoComponent,
    canActivate: [LoginGuardGuard]
  },

  {
    path: 'usuario/cadastroperfil',
    component: PerfilComponent,
    canActivate: [LoginGuardGuard]
  },

  {
    path: 'usuario/cadastrousuariolocal',
    component: UsuarioLocalComponent,
    canActivate: [LoginGuardGuard]
  },

  {
    path: 'usuario/relatoriologusuario',
    component: LogUsuarioComponent,
    canActivate: [LoginGuardGuard]
  },

  {
    path: 'usuario/relatoriousuariofuncao',
    component: UsuarioFuncaoComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'usuario/relatoriousuarioperfil',
    component: UsuarioPerfilComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'partidaschegadas',
    component: PartidasChegadasComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'portalMotorista',
    component: PortalMotoristaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'adminApp',
    component: AdminAppComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'simuladorAnalise',
    component: SimuladorAnaliseComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'simulador',
    component: SimuladorComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'simulador/:id',
    component: ItensSimuladorComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'contatoEmpresa',
    component: ContatoEmpresaComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'webview',
    component: PaginaWebviewComponent,
    canActivate: [LoginGuardGuard]
  },
  // {path: 'simuladorAnalise', component: SimuladorAnaliseComponent, canActivate: [LoginGuardGuard], canActivate: [LoginGuardGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
