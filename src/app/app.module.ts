import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import  { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TabModule } from 'angular-tabs-component';
import { MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { TopoComponent } from './inicio/topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CoordenacaoComponent } from './coordenacao/coordenacao.component';
import { EscalaComponent } from './escala/escala.component';
import { LiberacaoComponent } from './liberacao/liberacao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ROUTES, routing } from './app.routes';
import { MenuLateralComponent } from './inicio/menu-lateral/menu-lateral.component';
import { PartidasChegadasComponent } from './partidas-chegadas/partidas-chegadas.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { GrupoComponent } from './usuario/cadastro/grupo/grupo.component';
import { PerfilComponent } from './usuario/cadastro/perfil/perfil.component';
import { UsuarioLocalComponent } from './usuario/cadastro/usuario-local/usuario-local.component';
import { LogUsuarioComponent } from './usuario/relatorio/log/log.component';
import { UsuarioFuncaoComponent } from './usuario/relatorio/usuario-funcao/usuario-funcao.component';
import { RelatorioComponent } from './liberacao/relatorio/relatorio.component';
import { AlteracaoVeiculoComponent } from './liberacao/relatorio/alteracao-veiculo/alteracao-veiculo.component';
import { ApresentacaoTripulanteComponent } from './liberacao/relatorio/apresentacao-tripulante/apresentacao-tripulante.component';
import { AvariaCelularComponent } from './liberacao/relatorio/avaria-celular/avaria-celular.component';
import { CelularComponent } from './liberacao/relatorio/celular/celular.component';
import { ChegadaTripulanteComponent } from './liberacao/relatorio/chegada-tripulante/chegada-tripulante.component';
import { FolgaComponent } from './liberacao/relatorio/folga/folga.component';
import { MovimentacaoCelularComponent } from './liberacao/relatorio/movimentacao-celular/movimentacao-celular.component';
import { PartidaTripulanteComponent } from './liberacao/relatorio/partida-tripulante/partida-tripulante.component';
import { PontoComponent } from './liberacao/relatorio/ponto/ponto.component';
import { TotalizadorViagemComponent } from './liberacao/relatorio/totalizador-viagem/totalizador-viagem.component';
import { TripulanteSemPontoComponent } from './liberacao/relatorio/tripulante-sem-ponto/tripulante-sem-ponto.component';
import { ViradaVeiculoComponent } from './liberacao/relatorio/virada-veiculo/virada-veiculo.component';
import { MotivoBaixaComponent } from './liberacao/cadastro/motivo-baixa/motivo-baixa.component';
import { RegistroAvariaComponent } from './liberacao/cadastro/registro-avaria/registro-avaria.component';
import { TipoAvariaComponent } from './liberacao/cadastro/tipo-avaria/tipo-avaria.component';
import { MotivoLiberacaoComponent } from './liberacao/cadastro/motivo-liberacao/motivo-liberacao.component';
import { JustificativaComponent } from './liberacao/cadastro/justificativa/justificativa.component';
import { RegistrarComponent } from './liberacao/ponto/registrar/registrar.component';
import { AvaliarComponent } from './liberacao/ponto/avaliar/avaliar.component';
import { ImportacaoDatasulComponent } from './liberacao/ponto/importacao-datasul/importacao-datasul.component';
import { RegistroOcorrenciaComponent } from './liberacao/ocorrencia/registro-ocorrencia/registro-ocorrencia.component';
import { CompensacaoOperacionalComponent } from './escala/relatorio/compensacao-operacional/compensacao-operacional.component';
import { DespesaTripulanteComponent } from './escala/relatorio/despesa-tripulante/despesa-tripulante.component';
import { DiferencaEscalaComponent } from './escala/relatorio/diferenca-escala/diferenca-escala.component';
import { EscalaTripulanteComponent } from './escala/relatorio/escala-tripulante/escala-tripulante.component';
import { EscalaGeralComponent } from './escala/relatorio/escala-geral/escala-geral.component';
import { FolhaoDiarioComponent } from './escala/relatorio/folhao-diario/folhao-diario.component';
import { HoraExtraComponent } from './escala/relatorio/hora-extra/hora-extra.component';
import { IntegracaoBafometroComponent } from './escala/relatorio/integracao-bafometro/integracao-bafometro.component';
import { LogAlteracaoJornadaComponent } from './escala/relatorio/log-alteracao-jornada/log-alteracao-jornada.component';
import { MotoristaComponent } from './escala/relatorio/motorista/motorista.component';
import { AnaliseDigitacaoIntegracaoComponent } from './escala/relatorio/analise-digitacao-integracao/analise-digitacao-integracao.component';
import { AnomaliaInterjornadaComponent } from './escala/relatorio/anomalia-interjornada/anomalia-interjornada.component';
import { AproveitamentoTripulanteComponent } from './escala/relatorio/aproveitamento-tripulante/aproveitamento-tripulante.component';
import { CustoTripulanteLinhaComponent } from './escala/relatorio/custo-tripulante-linha/custo-tripulante-linha.component';
import { AutomatizadoDigitadoComponent } from './escala/relatorio/automatizado-digitado/automatizado-digitado.component';
import { FaltaComponent } from './escala/relatorio/falta/falta.component';
import { HoraAdicionalComponent } from './escala/relatorio/hora-adicional/hora-adicional.component';
import { HoraTrabalhadaComponent } from './escala/relatorio/hora-trabalhada/hora-trabalhada.component';
import { InterjornadaComponent } from './escala/relatorio/interjornada/interjornada.component';
import { ComparacaoJornadaPrevistaComponent } from './escala/relatorio/comparacao-jornada-prevista/comparacao-jornada-prevista.component';
import { MarcacaoComponent } from './escala/relatorio/marcacao/marcacao.component';
import { PagamentoComponent } from './escala/relatorio/pagamento/pagamento.component';
import { PernoiteComponent } from './escala/relatorio/pernoite/pernoite.component';
import { ValeRefeicaoComponent } from './escala/relatorio/vale-refeicao/vale-refeicao.component';
import { TempoDirecaoComponent } from './escala/relatorio/tempo-direcao/tempo-direcao.component';
import { TempoFolgaComponent } from './escala/relatorio/tempo-folga/tempo-folga.component';
import { JornadaComponent } from './escala/relatorio/jornada/jornada.component';
import { ProgramacaoAtividadeComponent } from './escala/relatorio/programacao-atividade/programacao-atividade.component';
import { VencimentoCarteiraComponent } from './escala/relatorio/vencimento-carteira/vencimento-carteira.component';
import { UtilizacaoDiariaTripulanteComponent } from './escala/relatorio/utilizacao-diaria-tripulante/utilizacao-diaria-tripulante.component';
import { CarteiraTripulanteComponent } from './escala/cadastro/escala-cadastro-carteira-tripulante/carteira-tripulante.component';
import { CarteiraLinhaComponent } from './escala/cadastro/escala-cadastro-carteira-linha/carteira-linha.component';
import { SindicatoComponent } from './escala/cadastro/escala-cadastro-sindicato/sindicato.component';
import { ExameConsultaComponent } from './escala/cadastro/escala-cadastro-exame-consulta/exame-consulta.component';
import { TipoExameComponent } from './escala/cadastro/escala-cadastro-tipo-exame/tipo-exame.component';
import { VencimentoExameComponent } from './escala/cadastro/escala-cadastro-vencimento-exame/vencimento-exame.component';
import { PremiacaoBaseOperacionalComponent } from './escala/cadastro/escala-cadastro-premiacao-base-operacional/premiacao-base-operacional.component';
import { PremiacaoLinhaComponent } from './escala/cadastro/escala-cadastro-premiacao-linha/premiacao-linha.component';
import { PerfilTripulanteComponent } from './escala/cadastro/escala-cadastro-perfil-tripulante/perfil-tripulante.component';
import { BaseTripulanteComponent } from './escala/cadastro/escala-cadastro-base-tripulante/base-tripulante.component';
import { CargoTripulanteComponent } from './escala/cadastro/escala-cadastro-cargo-tripulante/cargo-tripulante.component';
import { CargoPorFrotaComponent } from './escala/cadastro/escala-cadastro-cargo-por-frota/cargo-por-frota.component';
import { ContatoComponent } from './escala/cadastro/escala-cadastro-contato/contato.component';
import { FrotaFuncaoComponent } from './escala/cadastro/escala-cadastro-frota-funcao/frota-funcao.component';
import { FuncaoTripulanteComponent } from './escala/cadastro/escala-cadastro-funcao-tripulante/funcao-tripulante.component';
import { RefeicaoViagemComponent } from './escala/cadastro/escala-cadastro-refeicao-viagem/refeicao-viagem.component';
import { SessaoLinhaComponent } from './escala/cadastro/escala-cadastro-sessao-linha/sessao-linha.component';
import { ParadaTripulanteComponent } from './escala/cadastro/escala-cadastro-parada-tripulante/parada-tripulante.component';
import { TempoApresentacaoComponent } from './escala/cadastro/escala-cadastro-tempo-apresentacao/tempo-apresentacao.component';
import { FuncaoBordoComponent } from './escala/cadastro/escala-cadastro-funcao-bordo/funcao-bordo.component';
import { HabilitacaoHorarioComponent } from './escala/cadastro/escala-cadastro-habilitacao-horario/habilitacao-horario.component';
import { CentroCustoComponent } from './escala/cadastro/escala-cadastro-centro-custo/centro-custo.component';
import { RelogioPontoComponent } from './escala/cadastro/escala-cadastro-relogio-ponto/relogio-ponto.component';
import { ValeTransporteComponent } from './escala/cadastro/escala-cadastro-vale-transporte/vale-transporte.component';
import { ValorSalarioComponent } from './escala/cadastro/escala-cadastro-valor-salario/valor-salario.component';
import { AtividadeTripulanteComponent } from './escala/cadastro/escala-cadastro-atividade-tripulante/atividade-tripulante.component';
import { AtividadePagamentoComponent } from './escala/cadastro/escala-cadastro-atividade-pagamento/atividade-pagamento.component';
import { FeriadoComponent } from './escala/cadastro/escala-cadastro-feriado/feriado.component';
import { JustificativaTrocaTripulanteComponent } from './escala/cadastro/escala-cadastro-justificativa-troca-tripulante/justificativa-troca-tripulante.component';
import { ParametroEmpresaComponent } from './escala/cadastro/escala-cadastro-parametro-empresa/parametro-empresa.component';
import { RestricaoHorarioComponent } from './escala/cadastro/escala-cadastro-restricao-horario/restricao-horario.component';
import { TipoDespesaComponent } from './escala/cadastro/escala-cadastro-tipo-despesa/tipo-despesa.component';
import { TipoRefeicaoComponent } from './escala/cadastro/escala-cadastro-tipo-refeicao/tipo-refeicao.component';
import { GeracaoPontoComponent } from './escala/pagamento/geracao-ponto/geracao-ponto.component';
import { GeracaoPagamentoComponent } from './escala/pagamento/geracao-pagamento/geracao-pagamento.component';
import { PublicacaoPagamentoComponent } from './escala/pagamento/publicacao-pagamento/publicacao-pagamento.component';
import { ServicoPlanejadoComponent } from './escala/planejamento/servico-planejado/servico-planejado.component';
import { ConexaoChaveComponent } from './escala/planejamento/conexao-chave/conexao-chave.component';
import { ChaveServicoComponent } from './escala/planejamento/chave-servico/chave-servico.component';
import { FolhaoGraficoComponent } from './escala/planejamento/folhao-grafico/folhao-grafico.component';
import { PublicacaoEscalaComponent } from './escala/planejamento/publicacao-escala/publicacao-escala.component';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro-usuario/cadastro-usuario.component';
import { RelatorioEscalaComponent } from './liberacao/relatorio/relatorio-escala/relatorio-escala.component';
import { RelatorioLiberacaoComponent } from './liberacao/relatorio/relatorio-liberacao/relatorio-liberacao.component';
import { CadastroCelularComponent } from './liberacao/cadastro/cadastro-celular/cadastro-celular.component';
import { RelatorioApresentacaoTripulanteComponent } from './escala/relatorio/relatorio-apresentacao-tripulante/relatorio-apresentacao-tripulante.component';
import { RelatorioOcorrenciaComponent } from './escala/relatorio/relatorio-ocorrencia/relatorio-ocorrencia.component';
import { RelatorioPontoComponent } from './escala/relatorio/relatorio-ponto/relatorio-ponto.component';
import { RelatorioFolgaComponent } from './escala/relatorio/relatorio-folga/relatorio-folga.component';
import { RelatorioJustificativaInterjornadaComponent } from './escala/relatorio/relatorio-justificativa-interjornada/relatorio-justificativa-interjornada.component';
import { CoordenacaoRelatorioJustificativaInternaComponent } from './coordenacao/relatorio/coordenacao-relatorio-justificativa-interna/coordenacao-relatorio-justificativa-interna.component';
import { CoordenacaoRelatorioJustificativaComponent } from './coordenacao/relatorio/coordenacao-relatorio-justificativa/coordenacao-relatorio-justificativa.component';
import { CoordenacaoRelatorioTipoDocumentoComponent } from './coordenacao/relatorio/coordenacao-relatorio-tipo-documento/coordenacao-relatorio-tipo-documento.component';
import { CoordenacaoRelatorioAreaResponsavelComponent } from './coordenacao/relatorio/coordenacao-relatorio-area-responsavel/coordenacao-relatorio-area-responsavel.component';
import { CoordenacaoRelatorioUnidadeNegocioComponent } from './coordenacao/relatorio/coordenacao-relatorio-unidade-negocio/coordenacao-relatorio-unidade-negocio.component';
import { CoordenacaoRelatorioParametroEmpresaComponent } from './coordenacao/relatorio/coordenacao-relatorio-parametro-empresa/coordenacao-relatorio-parametro-empresa.component';
import { CoordenacaoRelatorioValorFusoHorarioComponent } from './coordenacao/relatorio/coordenacao-relatorio-valor-fuso-horario/coordenacao-relatorio-valor-fuso-horario.component';
import { CoordenacaoRelatorioFusoHorarioComponent } from './coordenacao/relatorio/coordenacao-relatorio-fuso-horario/coordenacao-relatorio-fuso-horario.component';
import { CoordenacaoRelatorioRegionalComponent } from './coordenacao/relatorio/coordenacao-relatorio-regional/coordenacao-relatorio-regional.component';
import { CoordenacaoRelatorioRegiaoMetropolitanaComponent } from './coordenacao/relatorio/coordenacao-relatorio-regiao-metropolitana/coordenacao-relatorio-regiao-metropolitana.component';
import { CoordenacaoRelatorioPaisComponent } from './coordenacao/relatorio/coordenacao-relatorio-pais/coordenacao-relatorio-pais.component';
import { CoordenacaoRelatorioNucleoOperacionalComponent } from './coordenacao/relatorio/coordenacao-relatorio-nucleo-operacional/coordenacao-relatorio-nucleo-operacional.component';
import { CoordenacaoRelatorioLocalReferenciaComponent } from './coordenacao/relatorio/coordenacao-relatorio-local-referencia/coordenacao-relatorio-local-referencia.component';
import { CoordenacaoRelatorioLocalComponent } from './coordenacao/relatorio/coordenacao-relatorio-local/coordenacao-relatorio-local.component';
import { CoordenacaoRelatorioServicosUnificadosComponent } from './coordenacao/relatorio/coordenacao-relatorio-servicos-unificados/coordenacao-relatorio-servicos-unificados.component';
import { CoordenacaoRelatorioDistanciaComponent } from './coordenacao/relatorio/coordenacao-relatorio-distancia/coordenacao-relatorio-distancia.component';
import { CoordenacaoRelatorioIntervaloAtrasoComponent } from './coordenacao/relatorio/coordenacao-relatorio-intervalo-atraso/coordenacao-relatorio-intervalo-atraso.component';
import { CoordenacaoRelatorioValorPedagioComponent } from './coordenacao/relatorio/coordenacao-relatorio-valor-pedagio/coordenacao-relatorio-valor-pedagio.component';
import { CoordenacaoRelatorioTempoParadaComponent } from './coordenacao/relatorio/coordenacao-relatorio-tempo-parada/coordenacao-relatorio-tempo-parada.component';
import { CoordenacaoRelatorioTempoPedagioComponent } from './coordenacao/relatorio/coordenacao-relatorio-tempo-pedagio/coordenacao-relatorio-tempo-pedagio.component';
import { CoordenacaoRelatorioTipoServicoComponent } from './coordenacao/relatorio/coordenacao-relatorio-tipo-servico/coordenacao-relatorio-tipo-servico.component';
import { CoordenacaoRelatorioGrupoLinhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-grupo-linha/coordenacao-relatorio-grupo-linha.component';
import { CoordenacaoRelatorioLinhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-linha/coordenacao-relatorio-linha.component';
import { CoordenacaoRelatorioAtividadeVeiculoComponent } from './coordenacao/relatorio/coordenacao-relatorio-atividade-veiculo/coordenacao-relatorio-atividade-veiculo.component';
import { CoordenacaoRelatorioVeiculoManutencaoComponent } from './coordenacao/relatorio/coordenacao-relatorio-veiculo-manutencao/coordenacao-relatorio-veiculo-manutencao.component';
import { CoordenacaoRelatorioVeiculoComponent } from './coordenacao/relatorio/coordenacao-relatorio-veiculo/coordenacao-relatorio-veiculo.component';
import { CoordenacaoRelatorioFrotaComponent } from './coordenacao/relatorio/coordenacao-relatorio-frota/coordenacao-relatorio-frota.component';
import { CoordenacaoRelatorioComponenteVeiculoComponent } from './coordenacao/relatorio/coordenacao-relatorio-componente-veiculo/coordenacao-relatorio-componente-veiculo.component';
import { CoordenacaoRelatorioClasseLinhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-classe-linha/coordenacao-relatorio-classe-linha.component';
import { CoordenacaoRelatorioCidadeComponent } from './coordenacao/relatorio/coordenacao-relatorio-cidade/coordenacao-relatorio-cidade.component';
import { CoordenacaoRelatorioPedidoCombustivelComponent } from './coordenacao/relatorio/coordenacao-relatorio-pedido-combustivel/coordenacao-relatorio-pedido-combustivel.component';
import { CoordenacaoRelatorioDiscrepanciaPrevisaoComponent } from './coordenacao/relatorio/coordenacao-relatorio-discrepancia-previsao/coordenacao-relatorio-discrepancia-previsao.component';
import { CoordenacaoRelatorioPrevisaoCombustivelComponent } from './coordenacao/relatorio/coordenacao-relatorio-previsao-combustivel/coordenacao-relatorio-previsao-combustivel.component';
import { CoordenacaoRelatorioRegistroAbastecimentoComponent } from './coordenacao/relatorio/coordenacao-relatorio-registro-abastecimento/coordenacao-relatorio-registro-abastecimento.component';
import { CoordenacaoRelatorioValorCombustivelComponent } from './coordenacao/relatorio/coordenacao-relatorio-valor-combustivel/coordenacao-relatorio-valor-combustivel.component';
import { CoordenacaoRelatorioValidacaoCenarioVigenteComponent } from './coordenacao/relatorio/coordenacao-relatorio-validacao-cenario-vigente/coordenacao-relatorio-validacao-cenario-vigente.component';
import { CoordenacaoRelatorioViagemPlanejadaLocalComponent } from './coordenacao/relatorio/coordenacao-relatorio-viagem-planejada-local/coordenacao-relatorio-viagem-planejada-local.component';
import { CoordenacaoRelatorioViagemPlanejadaAnaliseComponent } from './coordenacao/relatorio/coordenacao-relatorio-viagem-planejada-analise/coordenacao-relatorio-viagem-planejada-analise.component';
import { CoordenacaoRelatorioViagemPlanejadaComponent } from './coordenacao/relatorio/coordenacao-relatorio-viagem-planejada/coordenacao-relatorio-viagem-planejada.component';
import { CoordenacaoRelatorioQuantitativoInicioFimComponent } from './coordenacao/relatorio/coordenacao-relatorio-quantitativo-inicio-fim/coordenacao-relatorio-quantitativo-inicio-fim.component';
import { CoordenacaoRelatorioOperacaoFretamentoComponent } from './coordenacao/relatorio/coordenacao-relatorio-operacao-fretamento/coordenacao-relatorio-operacao-fretamento.component';
import { CoordenacaoRelatorioMalhaTextoComponent } from './coordenacao/relatorio/coordenacao-relatorio-malha-texto/coordenacao-relatorio-malha-texto.component';
import { CoordenacaoRelatorioMalhaViagemComponent } from './coordenacao/relatorio/coordenacao-relatorio-malha-viagem/coordenacao-relatorio-malha-viagem.component';
import { CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent } from './coordenacao/relatorio/coordenacao-relatorio-deslocamento-horario-planejado/coordenacao-relatorio-deslocamento-horario-planejado.component';
import { CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent } from './coordenacao/relatorio/coordenacao-relatorio-divergencia-planejamento-execucao/coordenacao-relatorio-divergencia-planejamento-execucao.component';
import { CoordenacaoRelatorioConexaoServicoComponent } from './coordenacao/relatorio/coordenacao-relatorio-conexao-servico/coordenacao-relatorio-conexao-servico.component';
import { CoordenacaoRelatorioConexaoCenarioComponent } from './coordenacao/relatorio/coordenacao-relatorio-conexao-cenario/coordenacao-relatorio-conexao-cenario.component';
import { CoordenacaoRelatorioChegadaProximaPartidaComponent } from './coordenacao/relatorio/coordenacao-relatorio-chegada-proxima-partida/coordenacao-relatorio-chegada-proxima-partida.component';
import { CoordenacaoRelatorioAnaliseMalhaComponent } from './coordenacao/relatorio/coordenacao-relatorio-analise-malha/coordenacao-relatorio-analise-malha.component';
import { CoordenacaoCadastroJustificativaComponent } from './coordenacao/cadastro/coordenacao-cadastro-justificativa/coordenacao-cadastro-justificativa.component';
import { CoordenacaoCadastroTipoDocumentoComponent } from './coordenacao/cadastro/coordenacao-cadastro-tipo-documento/coordenacao-cadastro-tipo-documento.component';
import { CoordenacaoCadastroAreaResponsavelComponent } from './coordenacao/cadastro/coordenacao-cadastro-area-responsavel/coordenacao-cadastro-area-responsavel.component';
import { CoordenacaoCadastroUnidadeNegocioComponent } from './coordenacao/cadastro/coordenacao-cadastro-unidade-negocio/coordenacao-cadastro-unidade-negocio.component';
import { CoordenacaoCadastroParametroEmpresaComponent } from './coordenacao/cadastro/coordenacao-cadastro-parametro-empresa/coordenacao-cadastro-parametro-empresa.component';
import { CoordenacaoCadastroValorFusoHorarioComponent } from './coordenacao/cadastro/coordenacao-cadastro-valor-fuso-horario/coordenacao-cadastro-valor-fuso-horario.component';
import { CoordenacaoCadastroTipoAtividadeVeiculoComponent } from './coordenacao/cadastro/coordenacao-cadastro-tipo-atividade-veiculo/coordenacao-cadastro-tipo-atividade-veiculo.component';
import { CoordenacaoCadastroAtividadeVeiculoComponent } from './coordenacao/cadastro/coordenacao-cadastro-atividade-veiculo/coordenacao-cadastro-atividade-veiculo.component';
import { CoordenacaoCadastroTempoParadaComponent } from './coordenacao/cadastro/coordenacao-cadastro-tempo-parada/coordenacao-cadastro-tempo-parada.component';
import { CoordenacaoCadastroTipoServicoComponent } from './coordenacao/cadastro/coordenacao-cadastro-tipo-servico/coordenacao-cadastro-tipo-servico.component';
import { CoordenacaoCadastroVeiculoComponent } from './coordenacao/cadastro/coordenacao-cadastro-veiculo/coordenacao-cadastro-veiculo.component';
import { CoordenacaoCadastroVeiculoManutencaoComponent } from './coordenacao/cadastro/coordenacao-cadastro-veiculo-manutencao/coordenacao-cadastro-veiculo-manutencao.component';
import { CoordenacaoCadastroComponenteVeiculoComponent } from './coordenacao/cadastro/coordenacao-cadastro-componente-veiculo/coordenacao-cadastro-componente-veiculo.component';
import { CoordenacaoCadastroFrotaComponent } from './coordenacao/cadastro/coordenacao-cadastro-frota/coordenacao-cadastro-frota.component';
import { CoordenacaoCadastroServicosUnificadosComponent } from './coordenacao/cadastro/coordenacao-cadastro-servicos-unificados/coordenacao-cadastro-servicos-unificados.component';
import { CoordenacaoCadastroValorPedagioComponent } from './coordenacao/cadastro/coordenacao-cadastro-valor-pedagio/coordenacao-cadastro-valor-pedagio.component';
import { CoordenacaoCadastroPedagioComponent } from './coordenacao/cadastro/coordenacao-cadastro-pedagio/coordenacao-cadastro-pedagio.component';
import { CoordenacaoCadastroIntervaloAtrasoComponent } from './coordenacao/cadastro/coordenacao-cadastro-intervalo-atraso/coordenacao-cadastro-intervalo-atraso.component';
import { CoordenacaoCadastroDistanciaComponent } from './coordenacao/cadastro/coordenacao-cadastro-distancia/coordenacao-cadastro-distancia.component';
import { CoordenacaoCadastroGrupoLinhaComponent } from './coordenacao/cadastro/coordenacao-cadastro-grupo-linha/coordenacao-cadastro-grupo-linha.component';
import { CoordenacaoCadastroClasseLinhaComponent } from './coordenacao/cadastro/coordenacao-cadastro-classe-linha/coordenacao-cadastro-classe-linha.component';
import { CoordenacaoCadastroLinhaComponent } from './coordenacao/cadastro/coordenacao-cadastro-linha/coordenacao-cadastro-linha.component';
import { CoordenacaoCadastroNucleoOperacionalComponent } from './coordenacao/cadastro/coordenacao-cadastro-nucleo-operacional/coordenacao-cadastro-nucleo-operacional.component';
import { CoordenacaoCadastroRegiaoMetropolitanaComponent } from './coordenacao/cadastro/coordenacao-cadastro-regiao-metropolitana/coordenacao-cadastro-regial-metropolitana.component';
import { CoordenacaoCadastroPaisComponent } from './coordenacao/cadastro/coordenacao-cadastro-pais/coordenacao-cadastro-pais.component';
import { CoordenacaoCadastroLocalReferenciaComponent } from './coordenacao/cadastro/coordenacao-cadastro-local-referencia/coordenacao-cadastro-local-referencia.component';
import { CoordenacaoCadastroGrupoLocalComponent } from './coordenacao/cadastro/coordenacao-cadastro-grupo-local/coordenacao-cadastro-grupo-local.component';
import { CoordenacaoCadastroLocalComponent } from './coordenacao/cadastro/coordenacao-cadastro-local/coordenacao-cadastro-local.component';
import { CoordenacaoCadastroCidadeComponent } from './coordenacao/cadastro/coordenacao-cadastro-cidade/coordenacao-cadastro-cidade.component';
import { CombustivelValorCombustivelComponent } from './coordenacao/combustivel/combustivel-valor-combustivel/combustivel-valor-combustivel.component';
import { CombustivelSondagemCombustivelComponent } from './coordenacao/combustivel/combustivel-sondagem-combustivel/combustivel-sondagem-combustivel.component';
import { CombustivelRegistroAbastecimentoComponent } from './coordenacao/combustivel/combustivel-registro-abastecimento/combustivel-registro-abastecimento.component';
import { CombustivelPeriodoAbastecimentoComponent } from './coordenacao/combustivel/combustivel-periodo-abastecimento/combustivel-periodo-abastecimento.component';
import { CoordenacaoServicoDiaComponent } from './coordenacao/coordenacao/coordenacao-servico-dia/coordenacao-servico-dia.component';
import { CoordenacaoIntegracaoVeltecComponent } from './coordenacao/coordenacao/coordenacao-integracao-veltec/coordenacao-integracao-veltec.component';
import { CombustivelDistribuidorComponent } from './coordenacao/combustivel/combustivel-distribuidor/combustivel-distribuidor.component';
import { CoordenacaoProjetoSistransComponent } from './coordenacao/coordenacao/coordenacao-projeto-sistrans/coordenacao-projeto-sistrans.component';
import { CoordenacaoConsultaOcupacaoComponent } from './coordenacao/coordenacao/coordenacao-consulta-ocupacao/coordenacao-consulta-ocupacao.component';
import { CoordenacaoRegistroTecnicoComponent } from './coordenacao/coordenacao/coordenacao-registro-tecnico/coordenacao-registro-tecnico.component';
import { CoordenacaoFechamentoPeriodoComponent } from './coordenacao/coordenacao/coordenacao-fechamento-periodo/coordenacao-fechamento-periodo.component';
import { CoordenacaoGeracaoServicoComponent } from './coordenacao/coordenacao/coordenacao-geracao-servico/coordenacao-geracao-servico.component';
import { CoordenacaoCoordenacaoViagemComponent } from './coordenacao/coordenacao/coordenacao-coordenacao-viagem/coordenacao-coordenacao-viagem.component';
import { ConexaoGeracaoComponent } from './coordenacao/planejamento/conexao-geracao/conexao-geracao.component';
import { ConexaoProibitivaComponent } from './coordenacao/planejamento/conexao-proibitiva/conexao-proibitiva.component';
import { ConexaoExclusaoComponent } from './coordenacao/planejamento/conexao-exclusao/conexao-exclusao.component';
import { ConexaoCadastroComponent } from './coordenacao/planejamento/conexao-cadastro/conexao-cadastro.component';
import { ConexaoRelatorioComponent } from './coordenacao/planejamento/conexao-relatorio/conexao-relatorio.component';
import { PlanejamentoCenarioComponent } from './coordenacao/planejamento/planejamento-cenario/planejamento-cenario.component';
import { PlanejamentoViagemPlanejadaComponent } from './coordenacao/planejamento/planejamento-viagem-planejada/planejamento-viagem-planejada.component';
import { PlanejamentoOtimizacaoComponent } from './coordenacao/planejamento/planejamento-otimizacao/planejamento-otimizacao.component';
import { PlanejamentoMalhaViagemComponent } from './coordenacao/planejamento/planejamento-malha-viagem/planejamento-malha-viagem.component';
import { PlanejamentoVigenciaCenarioComponent } from './coordenacao/planejamento/planejamento-vigencia-cenario/planejamento-vigencia-cenario.component';
import { PlanejamentoCopiaCenarioComponent } from './coordenacao/planejamento/planejamento-copia-cenario/planejamento-copia-cenario.component';
import { PlanejamentoRenovacaoExclusividadeComponent } from './coordenacao/planejamento/planejamento-renovacao-exclusividade/planejamento-renovacao-exclusividade.component';
import { PlanejamentoAtualizacaoTrilhoExecucaoComponent } from './coordenacao/planejamento/planejamento-atualizacao-trilho-execucao/planejamento-atualizacao-trilho-execucao.component';
import { LiberacaoFechamentoPeriodoComponent } from './liberacao/ponto/fechamento-periodo/fechamento-periodo.component';
import { FechamentoPeriodoComponent } from './escala/planejamento/fechamento-periodo/fechamento-periodo.component';
import { EscalaCadastroDadoGeralTripulanteComponent } from './escala/cadastro/escala-cadastro-dado-geral-tripulante/escala-cadastro-dado-geral-tripulante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroFusoHorarioComponent } from './coordenacao/cadastro-fuso-horario/cadastro-fuso-horario.component';
import { RelatorioTotalizadorAtividadeComponent } from './liberacao/relatorio/relatorio-totalizador-atividade/relatorio-totalizador-atividade.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './sharedServices/login.services';
import { LoginInterceptor } from './login/login.interceptor';
import { LoaderService } from './sharedServices/loader.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { RelatorioAlteracaoVeiculoService } from './sharedServices/liberacaoServices/relatorio-alteracao-veiculo.service';
import { RelatorioApresentacaoMotoristaService } from './sharedServices/liberacaoServices/relatorio-apresentacao-veiculo.service';
import { RelatorioCelularService } from './sharedServices/liberacaoServices/relatorio-celular.service';
import { RelatorioAvariaCelularService } from './sharedServices/liberacaoServices/relatorio-avaria-celular.service';
import { PortalMotoristaComponent } from './portal-motorista/portal-motorista.component';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { SimuladorComponent } from './admin-app/simulador/simulador.component';
import { ItensSimuladorComponent } from './admin-app/simulador/itens-simulador/itens-simulador.component';
import { SimuladorAnaliseComponent } from './admin-app/simulador/simulador-analise/simulador-analise.component';
import { ContatoEmpresaComponent } from './admin-app/contato-empresa/contato-empresa.component';
import { PaginaWebviewComponent } from './admin-app/pagina-webview/pagina-webview.component';
import { SimuladorService } from './sharedServices/appServices/simulador.service';
import { ContatoEmpresaService } from './sharedServices/appServices/contato-empresa.service';
import { SigUsuarioService } from './sharedServices/usuarioServices/sigUsuario.service';
import { SigUsuarioGrupoService } from './sharedServices/usuarioServices/sigUsuarioGrupo.service';
import { UsuarioPerfilComponent } from './usuario/relatorio/usuario-perfil/usuario-perfil.component';
import { SigPerfilService } from './sharedServices/usuarioServices/sigPerfil.service';
import { MatPaginatorIntlCro } from './sharedServices/paginator.service';
import { EditaUsuarioComponent } from './usuario/cadastro/cadastro-usuario/edita-usuario/edita-usuario.component';
import { NovoUsuarioComponent } from './usuario/cadastro/cadastro-usuario/novo-usuario/novo-usuario.component';
import { SigUsuarioLocalService } from './sharedServices/usuarioServices/sigUsuarioLocal.service';
import { SigFuncaoService } from './sharedServices/usuarioServices/sigFuncao.service';
import { PortalMotoristaService } from './sharedServices/portalMotorista/portalMotorista.service';
import { PartidasChegadasService } from './sharedServices/partidasChegadasServices/partidasChegadas.service';
import { BottomSheetFuncoes, FuncaoPerfilComponent } from './usuario/cadastro/perfil/funcao-perfil/funcao-perfil.component';
import { SigPerfilFuncaoService } from './sharedServices/usuarioServices/sigPerfilFuncao.service';
import { ClonaUsuarioComponent } from './usuario/cadastro/cadastro-usuario/clona-usuario/clona-usuario.component';
import { RelatorioUsuarioService } from './sharedServices/usuarioServices/relatorioUsuario.service';
import { MatTreeModule } from '@angular/material/tree';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    CoordenacaoComponent,
    EscalaComponent,
    LiberacaoComponent,
    UsuarioComponent,
    InicioComponent,
    LoginComponent,
    MenuLateralComponent,
    PartidasChegadasComponent,
    CadastroComponent,
    GrupoComponent,
    PerfilComponent,
    UsuarioLocalComponent,
    LogUsuarioComponent,
    UsuarioFuncaoComponent,
    RelatorioComponent,
    AlteracaoVeiculoComponent,
    ApresentacaoTripulanteComponent,
    AvariaCelularComponent,
    CelularComponent,
    ChegadaTripulanteComponent,
    FolgaComponent,
    MovimentacaoCelularComponent,
    RelatorioOcorrenciaComponent,
    PartidaTripulanteComponent,
    PontoComponent,
    TotalizadorViagemComponent,
    TripulanteSemPontoComponent,
    ViradaVeiculoComponent,
    MotivoBaixaComponent,
    RegistroAvariaComponent,
    TipoAvariaComponent,
    MotivoLiberacaoComponent,
    JustificativaComponent,
    RegistrarComponent,
    AvaliarComponent,
    ImportacaoDatasulComponent,
    LiberacaoFechamentoPeriodoComponent,
    FechamentoPeriodoComponent,
    RegistroOcorrenciaComponent,
    CompensacaoOperacionalComponent,
    DespesaTripulanteComponent,
    DiferencaEscalaComponent,
    EscalaTripulanteComponent,
    EscalaGeralComponent,
    FolhaoDiarioComponent,
    HoraExtraComponent,
    IntegracaoBafometroComponent,
    LogAlteracaoJornadaComponent,
    MotoristaComponent,
    AnaliseDigitacaoIntegracaoComponent,
    AnomaliaInterjornadaComponent,
    AproveitamentoTripulanteComponent,
    CustoTripulanteLinhaComponent,
    AutomatizadoDigitadoComponent,
    FaltaComponent,
    HoraAdicionalComponent,
    HoraTrabalhadaComponent,
    InterjornadaComponent,
    ComparacaoJornadaPrevistaComponent,
    MarcacaoComponent,
    PagamentoComponent,
    PernoiteComponent,
    ValeRefeicaoComponent,
    TempoDirecaoComponent,
    TempoFolgaComponent,
    JornadaComponent,
    ProgramacaoAtividadeComponent,
    VencimentoCarteiraComponent,
    UtilizacaoDiariaTripulanteComponent,
    CarteiraTripulanteComponent,
    CarteiraLinhaComponent,
    SindicatoComponent,
    ExameConsultaComponent,
    TipoExameComponent,
    VencimentoExameComponent,
    PremiacaoBaseOperacionalComponent,
    PremiacaoLinhaComponent,
    PerfilTripulanteComponent,
    BaseTripulanteComponent,
    CargoTripulanteComponent,
    CargoPorFrotaComponent,
    ContatoComponent,
    FrotaFuncaoComponent,
    FuncaoTripulanteComponent,
    RefeicaoViagemComponent,
    SessaoLinhaComponent,
    ParadaTripulanteComponent,
    TempoApresentacaoComponent,
    FuncaoBordoComponent,
    HabilitacaoHorarioComponent,
    CentroCustoComponent,
    RelogioPontoComponent,
    ValeTransporteComponent,
    ValorSalarioComponent,
    AtividadeTripulanteComponent,
    AtividadePagamentoComponent,
    FeriadoComponent,
    JustificativaTrocaTripulanteComponent,
    ParametroEmpresaComponent,
    RestricaoHorarioComponent,
    TipoDespesaComponent,
    TipoRefeicaoComponent,
    GeracaoPontoComponent,
    GeracaoPagamentoComponent,
    PublicacaoPagamentoComponent,
    ServicoPlanejadoComponent,
    ConexaoChaveComponent,
    ChaveServicoComponent,
    FolhaoGraficoComponent,
    PublicacaoEscalaComponent,
    CadastroUsuarioComponent,
    RelatorioEscalaComponent,
    RelatorioLiberacaoComponent,
    CadastroCelularComponent,
    RelatorioApresentacaoTripulanteComponent,
    RelatorioOcorrenciaComponent,
    RelatorioPontoComponent,
    RelatorioFolgaComponent,
    RelatorioJustificativaInterjornadaComponent,
    CoordenacaoRelatorioJustificativaInternaComponent,
    CoordenacaoRelatorioJustificativaComponent,
    CoordenacaoRelatorioTipoDocumentoComponent,
    CoordenacaoRelatorioAreaResponsavelComponent,
    CoordenacaoRelatorioUnidadeNegocioComponent,
    CoordenacaoRelatorioParametroEmpresaComponent,
    CoordenacaoRelatorioValorFusoHorarioComponent,
    CoordenacaoRelatorioFusoHorarioComponent,
    CoordenacaoRelatorioRegionalComponent,
    CoordenacaoRelatorioRegiaoMetropolitanaComponent,
    CoordenacaoRelatorioPaisComponent,
    CoordenacaoRelatorioNucleoOperacionalComponent,
    CoordenacaoRelatorioLocalReferenciaComponent,
    CoordenacaoRelatorioLocalComponent,
    CoordenacaoRelatorioServicosUnificadosComponent,
    CoordenacaoRelatorioDistanciaComponent,
    CoordenacaoRelatorioIntervaloAtrasoComponent,
    CoordenacaoRelatorioValorPedagioComponent,
    CoordenacaoRelatorioTempoParadaComponent,
    CoordenacaoRelatorioTempoPedagioComponent,
    CoordenacaoRelatorioTipoServicoComponent,
    CoordenacaoRelatorioGrupoLinhaComponent,
    CoordenacaoRelatorioLinhaComponent,
    CoordenacaoRelatorioAtividadeVeiculoComponent,
    CoordenacaoRelatorioVeiculoManutencaoComponent,
    CoordenacaoRelatorioVeiculoComponent,
    CoordenacaoRelatorioFrotaComponent,
    CoordenacaoRelatorioComponenteVeiculoComponent,
    CoordenacaoRelatorioClasseLinhaComponent,
    CoordenacaoRelatorioCidadeComponent,
    CoordenacaoRelatorioPedidoCombustivelComponent,
    CoordenacaoRelatorioDiscrepanciaPrevisaoComponent,
    CoordenacaoRelatorioPrevisaoCombustivelComponent,
    CoordenacaoRelatorioRegistroAbastecimentoComponent,
    CoordenacaoRelatorioValorCombustivelComponent,
    CoordenacaoRelatorioValidacaoCenarioVigenteComponent,
    CoordenacaoRelatorioViagemPlanejadaLocalComponent,
    CoordenacaoRelatorioViagemPlanejadaAnaliseComponent,
    CoordenacaoRelatorioViagemPlanejadaComponent,
    CoordenacaoRelatorioQuantitativoInicioFimComponent,
    CoordenacaoRelatorioOperacaoFretamentoComponent,
    CoordenacaoRelatorioMalhaTextoComponent,
    CoordenacaoRelatorioMalhaViagemComponent,
    CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent,
    CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent,
    CoordenacaoRelatorioConexaoServicoComponent,
    CoordenacaoRelatorioConexaoCenarioComponent,
    CoordenacaoRelatorioChegadaProximaPartidaComponent,
    CoordenacaoRelatorioAnaliseMalhaComponent,
    CoordenacaoCadastroJustificativaComponent,
    CoordenacaoCadastroTipoDocumentoComponent,
    CoordenacaoCadastroAreaResponsavelComponent,
    CoordenacaoCadastroUnidadeNegocioComponent,
    CoordenacaoCadastroParametroEmpresaComponent,
    CoordenacaoCadastroValorFusoHorarioComponent,
    CoordenacaoCadastroTipoAtividadeVeiculoComponent,
    CoordenacaoCadastroAtividadeVeiculoComponent,
    CoordenacaoCadastroTempoParadaComponent,
    CoordenacaoCadastroTipoServicoComponent,
    CoordenacaoCadastroVeiculoComponent,
    CoordenacaoCadastroVeiculoManutencaoComponent,
    CoordenacaoCadastroComponenteVeiculoComponent,
    CoordenacaoCadastroFrotaComponent,
    CoordenacaoCadastroServicosUnificadosComponent,
    CoordenacaoCadastroValorPedagioComponent,
    CoordenacaoCadastroPedagioComponent,
    CoordenacaoCadastroIntervaloAtrasoComponent,
    CoordenacaoCadastroDistanciaComponent,
    CoordenacaoCadastroGrupoLinhaComponent,
    CoordenacaoCadastroClasseLinhaComponent,
    CoordenacaoCadastroLinhaComponent,
    CoordenacaoCadastroNucleoOperacionalComponent,
    CoordenacaoCadastroRegiaoMetropolitanaComponent,
    CoordenacaoCadastroPaisComponent,
    CoordenacaoCadastroLocalReferenciaComponent,
    CoordenacaoCadastroGrupoLocalComponent,
    CoordenacaoCadastroLocalComponent,
    CoordenacaoCadastroCidadeComponent,
    CombustivelValorCombustivelComponent,
    CombustivelSondagemCombustivelComponent,
    CombustivelRegistroAbastecimentoComponent,
    CombustivelPeriodoAbastecimentoComponent,
    CoordenacaoServicoDiaComponent,
    CoordenacaoIntegracaoVeltecComponent,
    CombustivelDistribuidorComponent,
    CoordenacaoProjetoSistransComponent,
    CoordenacaoConsultaOcupacaoComponent,
    CoordenacaoRegistroTecnicoComponent,
    CoordenacaoFechamentoPeriodoComponent,
    CoordenacaoGeracaoServicoComponent,
    CoordenacaoCoordenacaoViagemComponent,
    ConexaoGeracaoComponent,
    ConexaoProibitivaComponent,
    ConexaoExclusaoComponent,
    ConexaoCadastroComponent,
    ConexaoRelatorioComponent,
    PlanejamentoCenarioComponent,
    PlanejamentoViagemPlanejadaComponent,
    PlanejamentoOtimizacaoComponent,
    PlanejamentoMalhaViagemComponent,
    PlanejamentoVigenciaCenarioComponent,
    PlanejamentoCopiaCenarioComponent,
    PlanejamentoRenovacaoExclusividadeComponent,
    PlanejamentoAtualizacaoTrilhoExecucaoComponent,
    EscalaCadastroDadoGeralTripulanteComponent,
    CadastroFusoHorarioComponent,
    RelatorioTotalizadorAtividadeComponent,
    PortalMotoristaComponent,
    AdminAppComponent,
    SimuladorComponent,
    ItensSimuladorComponent,
    SimuladorAnaliseComponent,
    ContatoEmpresaComponent,
    PaginaWebviewComponent,
    UsuarioPerfilComponent,
    EditaUsuarioComponent,
    NovoUsuarioComponent,
    FuncaoPerfilComponent,
    ClonaUsuarioComponent,
    BottomSheetFuncoes
  ],
  imports: [
    MatRadioModule,
    MatTooltipModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserModule,
    MatBottomSheetModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
    MatSelectModule,
    NgSelectModule ,
    MatSortModule,
    NgxSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(
      {positionClass: 'toast-bottom-right'}
    ),
    routing,
    BsDatepickerModule.forRoot(),
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    TabModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    MatSliderModule,
    NgxMatSelectSearchModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatBadgeModule,
    MatTableModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    MatNativeDateModule,
    RelatorioUsuarioService,
    LoginService,
    LoaderService,
    RelatorioAlteracaoVeiculoService,
    RelatorioApresentacaoMotoristaService,
    RelatorioCelularService,
    RelatorioAvariaCelularService,
    SimuladorService,
    SigUsuarioService,
    SigUsuarioGrupoService,
    SigPerfilService,
    SigPerfilFuncaoService,
    SigFuncaoService,
    SigUsuarioLocalService,
    ContatoEmpresaService,
    PortalMotoristaService,
    PartidasChegadasService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlCro
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
