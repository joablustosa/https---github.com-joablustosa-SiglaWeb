import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LiberacaoPendente } from '../sharedModels/liberacaoModels/liberacaoModels/liberacaoPendente.model';
import { PesquisaLiberacao } from '../sharedModels/liberacaoModels/pesquisaModels/pesquisa-liberacao.model';
import { LiberacaoPendenteService } from '../sharedServices/liberacaoServices/liberacao-pendente.service';
import { SelectService } from '../sharedServices/selectServices/select.service';

@Component({
  selector: 'app-liberacao',
  templateUrl: './liberacao.component.html',
  styleUrls: ['./liberacao.component.css'],
  providers: [DatePipe]
})
export class LiberacaoComponent implements OnInit {
  liberacoesTodas: any;
  liberacaoToda: any;
  liberacao: any;
  registerForm!: FormGroup;
  usuarioLogado: string = localStorage.getItem('usuarioSessao')!
  origemFilter: any
  origem: any
  dataHoje = this.datePipe.transform(new Date, 'yyy-MM-dd')
  selectLocais: any = [];
  selectLocal: any;

  nomeColunas = ["servico", "linha", "tipoViagem", "frota", "veiculo", "apresentacao", "origem", "destino", "garagem", "rodoviaria", "plataforma", "motorista", "aBordo", "cargo", "base"];
  public liberacoes = new MatTableDataSource<LiberacaoPendente>();
  clickLinhas = new Set<LiberacaoPendente>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private http: HttpClient,
    private liberacaoService: LiberacaoPendenteService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private selectService: SelectService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getliberacoes();
    this.getLocal();
  }

  ngAfterViewInit(): void {
    this.liberacoes.sort = this.sort;
    this.liberacoes.paginator = this.paginator;
  }

  openModal(template: any): void {
    this.registerForm.reset();
    template.show(template);
  }

  public getliberacoes(){
    this.liberacaoService.getliberacao({'dthrinicio': this.dataHoje, 'dthrfim': this.dataHoje}).subscribe(response => {
      this.liberacoes.data = response as LiberacaoPendente[];
      this.spinner.hide();
    })
  }

  public novaPesquisa(pesquisa: PesquisaLiberacao){
    this.liberacaoService.getliberacao(pesquisa).subscribe(response => {
      this.liberacoes.data = response as LiberacaoPendente[];
    })
  }

  public filtrar = (texto: KeyboardEvent) => {
    const target = texto.target as HTMLTextAreaElement;
    const value = target.value.trim().toLowerCase();
    this.liberacoes.filter = value;
  }

  getLocal(){
    this.selectService.getSiglaLocal().subscribe(response => {
      this.selectLocais = response;
    });
  }
  
  // deleteliberacao(liberacao: liberacao, template: any) {
  //   this.openModal(template);
  //   this.liberacao = liberacao;
  //   this.bodyDeletarEvento = `Tem certeza que deseja excluir o Evento: ${liberacao.nome}, Código: ${liberacao.id}`;
  // }

  // public confirmeDelete(template: any) {
  //   this.liberacaoService.deleteliberacao(this.liberacao.id).subscribe(
  //     response => {
  //     this.liberacaos = response;
  //     this.toastr.success('O liberacao foi excluido');
  //     template.hide();
  //     this.getliberacaos();
  //   }, error => {
  //     this.toastr.warning('Não foi possível excluir');
  //   });
  // }

  // public getliberacaosById(id){
  //   this.liberacaoService.getliberacaosById(id).subscribe(response => {
  //     this.liberacao = response;
  //   })
  // }


  // editarliberacao(liberacao: liberacao, liberacaoTemplate: any){
  //   this.modoSalvar = 'put'
  //   this.openModal(liberacaoTemplate);
  //   this.liberacao = liberacao;
  //   this.registerForm.patchValue(liberacao);
  // }

  // novoliberacao(liberacaoTemplate: any){
  //   this.modoSalvar = 'post'
  //   this.openModal(liberacaoTemplate);
  // }

  // salvarAlteracao(liberacaoTemplate: any){
  //   if(this.registerForm.valid){
  //     if(this.modoSalvar === 'post'){
  //       this.liberacao = Object.assign({}, this.registerForm.value);
  //       this.liberacaoService.saveliberacao(this.liberacao).subscribe(
  //         (novoliberacao: liberacao) => {
  //           liberacaoTemplate.hide();
  //           this.toastr.success('O liberacao foi salvo');
  //           this.getliberacaos();
  //         },error => {
  //           this.toastr.warning('Não foi possível salvar');
  //         }
  //       );
  //     }
  //     else{
  //       this.liberacao = Object.assign({id: this.liberacao.id}, this.registerForm.value);
  //       this.liberacaoService.putliberacao(this.liberacao).subscribe(
  //         (novoliberacao: liberacao) => {
  //           liberacaoTemplate.hide();
  //           this.toastr.success('O liberacao foi salvo');
  //           this.getliberacaos();
  //         },error => {
  //           this.toastr.warning('Não foi possível salvar');
  //         }
  //       );
  //     }
  //   }
  // }

  public pesquisaLiberacao: PesquisaLiberacao = new PesquisaLiberacao()
  public dataInicial: string = ''
  public origemInicial: string = ''
  public destinoInicial: string = ''

  public dataInicialValido!: boolean;
  public origemInicialValido!: boolean
  public destinoInicialValido!: boolean

  public dataInicialEstadoPrimitivo: boolean = true
  public origemInicialEstadoPrimitivo: boolean = true
  public destinoInicialEstadoPrimitivo: boolean = true

  public formEstado: string = 'disabled'
  public atualizaDataInicial(dataInicial: string): void{
    this.dataInicial = dataInicial
    this.dataInicialEstadoPrimitivo = false
    if(this.dataInicial.length > 3){
      this.dataInicialValido = true
    }
    else{
      this.dataInicialValido = false
    }
    this.habilitaForm()
  }
  public atualizaOrigemInicial(origemInicial: string): void{
    this.origemInicial = origemInicial
    this.origemInicialEstadoPrimitivo = false
    if(this.origemInicial != null){
      this.origemInicialValido = true
    }
    else{
      this.origemInicialValido = false
    }
    this.habilitaForm()
  }

  public atualizaDestinoInicial(destinoInicial: string): void{
    this.destinoInicial = destinoInicial
    this.destinoInicialEstadoPrimitivo = false
    if(this.destinoInicial != null){
      this.destinoInicialValido = true
    }
    else{
      this.destinoInicialValido = false
    }
    this.habilitaForm()
  }

  public habilitaForm(): void{
    if(this.dataInicialValido === true &&
      this.origemInicialValido === true &&
      this.destinoInicialValido === true
    ){
      this.formEstado = ''
    }else{
      this.formEstado = 'disabled'
    }
  }

public pesquisaLiberacaoPost(): void{
  this.pesquisaLiberacao.dthrinicio = this.dataInicial
  this.pesquisaLiberacao.dthrfim = this.origemInicial
  // this.pesquisaLiberacao.seqaeroporig = this.destinoInicial
  // this.pesquisaLiberacao.seqaeropdest = this.destinoInicial
  this.pesquisaLiberacao.flgsomentelocal = this.destinoInicial
  this.pesquisaLiberacao.flgsomentesemtrip = this.destinoInicial
  this.liberacaoService.getliberacao(this.pesquisaLiberacao).subscribe(response => {
    this.liberacoes.data = response as LiberacaoPendente[];
    this.spinner.hide();
  })
}

  // public getPerguntas(liberacao){
  //   this.router.navigate(['liberacao',liberacao.id]);
  // }

}
