import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PesquisaRelatorioRegistroAvariaCelular } from 'src/app/sharedModels/liberacaoModels/pesquisaModels/pesquisa-relatorio-registro-avaria-celular.model';
import { RelatorioAvariaCelularService } from 'src/app/sharedServices/liberacaoServices/relatorio-avaria-celular.service';
import { SelectService } from 'src/app/sharedServices/selectServices/select.service';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
defineLocale('pt-br', ptBrLocale);
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-avaria-celular',
  templateUrl: './avaria-celular.component.html',
  styleUrls: ['./avaria-celular.component.css']
})
export class AvariaCelularComponent implements OnInit {
  avariasCelularesTodas: any = [];
  avariaCelular: any;
  selectRegionais: any = [];
  selectRegional: any;
  selectNops: any = [];
  selectNop: any;
  registerForm!: FormGroup;
  get f(): any {
    return this.registerForm.controls;
  }
  public pesquisa: PesquisaRelatorioRegistroAvariaCelular = new PesquisaRelatorioRegistroAvariaCelular('','','','',0,0)

  nomeColunas = ["localizador", "descricaoavaria", "matricula", "nome", "dtresolucao", "observacao", "usuario", "dthralteracao", "siglaregional", "descregional", "siglanop", "descrnop"];
  public avariasCelulares = new MatTableDataSource<PesquisaRelatorioRegistroAvariaCelular>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private relatorioAvariaCelularService: RelatorioAvariaCelularService,
    private modalService: BsModalService,
    private selectService: SelectService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private config: NgSelectConfig,
    private localeService: BsLocaleService
  ) { 
    this.localeService.use('pt-br')
  }

  resetForm(){
    this.registerForm.reset();
  }

  openModal(avariaCelularTemplate: any): void {
    this.registerForm.reset();
    avariaCelularTemplate.show(avariaCelularTemplate);
  }

  ngOnInit(): void {
    this.validacao();
    this.getRegional();
    this.getNop();
  }

  public enviaPesquisa(){
    if(this.registerForm.valid){
      this.spinner.show();
      this.pesquisa = Object.assign({}, this.registerForm.value);
      //console.log(this.pesquisa)
      this.relatorioAvariaCelularService.getAvariaCelular(this.pesquisa).subscribe(response => {
        this.avariasCelulares.data = response as PesquisaRelatorioRegistroAvariaCelular[];
        this.spinner.hide();
      })
    }
  }

  novaCelular(avariaCelularTemplate: any){
    this.openModal(avariaCelularTemplate);
  }

  getRegional(){
    this.selectService.getRegional().subscribe(response => {
      this.selectRegionais = response;
    });
  }

  getNop(){
    this.selectService.getNop().subscribe(response => {
      this.selectNops = response;
    });
  }

  private validacao(){
    this.registerForm = this.fb.group(
      {
        dtoperini: ['', Validators.required],
        dtoperfim: ['', Validators.required],
        flgsolucionado: [''],
        localizador: [''],
        seqregional: [''],
        seqnop: [''],
      }
    );
  }
  download(){
    var opcoes = {
      fieldSeparator: ',',
      //quoteStrings: '""',
      decimalseparator: '.',
      showLabels: true,
      // title: 'Relatório Avaria Celular',
      useBom: true,
      // noDownload: true,
      headers: ["localizador", "dthravaria", "descricaoavaria", "matricula", "nome", "dthrresolucao", "observacao", "usuario", "dthralteracao", "siglaregional", "descregional", "siglanop", "descrnop"],
    }
    new ngxCsv(this.avariasCelulares.data, 'relatorio_avaria_celular_sigla',opcoes);
  }
  
}
