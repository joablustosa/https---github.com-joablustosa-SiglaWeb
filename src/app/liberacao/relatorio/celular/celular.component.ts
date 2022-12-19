import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ngxCsv } from 'ngx-csv';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PesquisaRelatorioCelular } from 'src/app/sharedModels/liberacaoModels/pesquisaModels/pesquisa-relatorio-celular.model';
import { RelatorioCelular } from 'src/app/sharedModels/liberacaoModels/relarorioModels/relatorio-celular.model';
import { RelatorioCelularService } from 'src/app/sharedServices/liberacaoServices/relatorio-celular.service';
import { SelectService } from 'src/app/sharedServices/selectServices/select.service';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent implements OnInit {
  selectLocais: any = [];
  selectLocal: any;
  celularesTodos: any = [];
  celular: any;
  registerForm!: FormGroup;
  get f(): any {
    return this.registerForm.controls;
  }
  
  getLocal(){
    this.selectService.getSiglaLocal().subscribe(response => {
      this.selectLocais = response;
    });
  }

  
  public pesquisa: PesquisaRelatorioCelular = new PesquisaRelatorioCelular(0,'')

  nomeColunas = ["imei", "dtinicio", "dtfim", "localizacao_atual", "grupo_local_atual", "matricula", "nome", "nomeguerra", "nomebase", "observacao", "dthralteracao", "local_entrega_prevista", "dthr_entrega_prevista"];
  public celulares = new MatTableDataSource<PesquisaRelatorioCelular>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private relatorioCelularService: RelatorioCelularService,
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

  openModal(celularTemplate: any): void {
    this.registerForm.reset();
    celularTemplate.show(celularTemplate);
  }

  ngOnInit(): void {
    this.validacao();
    this.getLocal();
  }

  public enviaPesquisa(){
    if(this.registerForm.valid){
      this.spinner.show();
      this.pesquisa = Object.assign({}, this.registerForm.value);
      //console.log(this.pesquisa)
      this.relatorioCelularService.getCelular(this.pesquisa).subscribe(response => {
        this.celulares.data = response as PesquisaRelatorioCelular[];
        this.spinner.hide();
      })
    }
  }

  novoCelular(celularTemplate: any){
    this.openModal(celularTemplate);
  }


  private validacao(){
    this.registerForm = this.fb.group(
      {
        seqaeroporto_atual: ['', Validators.required],
        flgsomentependentedev: ['']
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
      headers: ["imei", "dtinicio", "dtfim", "localizacao_atual", "grupo_local_atual", "matricula", "nome", "nomeguerra", "nomebase", "observacao", "dthralteracao", "local_entrega_prevista", "dthr_entrega_prevista"],
    }
    new ngxCsv(this.celulares.data, 'relatorio_celular_sigla'+ Date.now().toString,opcoes);
  }
}