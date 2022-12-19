import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PesquisaRelatorioApresentacaoLiberacao } from 'src/app/sharedModels/liberacaoModels/pesquisaModels/pesquisa-relatorio-apresentacao-liberacao.model';

@Component({
  selector: 'app-apresentacao-tripulante',
  templateUrl: './apresentacao-tripulante.component.html',
  styleUrls: ['./apresentacao-tripulante.component.css']
})
export class ApresentacaoTripulanteComponent implements OnInit {
  // pesquisa!: PesquisaRelatorioApresentacaoLiberacao;
  // alteracoes: any = [];
  // alteracao: any;
  // registerForm!: FormGroup;
  // dataHoje = this.datePipe.transform(new Date, 'yyy-MM-dd')

  // get f(): any {
  //   return this.registerForm.controls;
  // }

  // constructor(
  //   private http: HttpClient,
  //   private alteracaoVeiculoService: RelatorioApresentacaoMotoristaService,
  //   private modalService: BsModalService,
  //   private toastr: ToastrService,
  //   private fb: FormBuilder,
  //   private router: Router,
  //   private spinner: NgxSpinnerService,
  //   private datePipe: DatePipe
  // ) { 
    
  // }

  // resetForm(){
  //   this.registerForm.reset();
  // }

  // openModal(checklistTemplate: any): void {
  //   this.registerForm.reset();
  //   checklistTemplate.show(checklistTemplate);
  // }

  ngOnInit(): void {
    // this.validacao();
  }

  // enviaPesquisa(){
  //   if(this.registerForm.valid){
  //     this.pesquisa = Object.assign({}, this.registerForm.value);
  //     this.alteracaoVeiculoService.getAlteracao(this.pesquisa).subscribe(
  //       (novoRelatorio: RelatorioAlteracaoVeiculo) => {
  //         this.toastr.success('O Checklist foi salvo');
  //       },error => {
  //         this.toastr.warning('Não foi possível salvar');
  //       }
  //     );
  //   }
  // }

  // novaAlteracao(alteracaoTemplate: any){
  //   this.openModal(alteracaoTemplate);
  // }

  // private validacao(){
  //   this.registerForm = this.fb.group(
  //     {
  //       dataInicial: ['', Validators.required],
  //       dataFinal: ['', Validators.required],
  //       origem: [''],
  //       destino: [''],
  //       dataAlteracaoInicial: [''],
  //       dataAlteracaoFinal: [''],
  //       usuario: [''],
  //       justificativa: [''],
  //       regionalVeiculo: [''],
  //       nopVeiculo: [''],
  //       regionalLinha: [''],
  //       nopLinha: [''],
  //     }
  //   );
  // }
}
