import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SigGrupo, SigUsuarioGrupo } from 'src/app/sharedModels/usuarioModels/sigUsuarioGrupo.model';
import { SigUsuarioGrupoService } from 'src/app/sharedServices/usuarioServices/sigUsuarioGrupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  sigUsuarioGruposTodas: any = [];
  sigUsuarioGrupo!: SigUsuarioGrupo;
  sigUsuarioGruposFiltrados: any = [];
  registerForm!: FormGroup;
  usuarioLogado: string = localStorage.getItem('usuarioSessao')!
  bodyDeletarEvento: string = ''
  modoSalvar = 'post'
  nomeColunas = ["descgrupo", "acao"];
  public sigUsuarioGrupos = new MatTableDataSource<SigGrupo>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private http: HttpClient,
    private sigUsuarioGrupoService: SigUsuarioGrupoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getSigUsuarioGrupos();
    this.validacao();
  }

  ngAfterViewInit(): void {
    this.sigUsuarioGrupos.sort = this.sort;
    this.sigUsuarioGrupos.paginator = this.paginator;
  }

  public filtrar = (target: any) => {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.sigUsuarioGrupos.filter = value;
    }
  }

  openModal(sigUsuarioGrupoTemplate: any): void {
    this.registerForm.reset();
    sigUsuarioGrupoTemplate.show(sigUsuarioGrupoTemplate);
  }

  public getSigUsuarioGrupos(){
    this.spinner.show();
    this.sigUsuarioGrupoService.getSigUsuarioGrupo().subscribe(response => {
      this.sigUsuarioGrupos.data = response as SigGrupo[];
      this.spinner.hide();
    });
  }

  deleteUsuarioGrupo(sigUsuarioGrupo: SigUsuarioGrupo, template: any) {
    this.openModal(template);
    this.sigUsuarioGrupo = sigUsuarioGrupo;
    this.bodyDeletarEvento = `Tem certeza que deseja excluir?`;
  }

  public confirmeDelete(template: any) {
    this.spinner.show();
    this.sigUsuarioGrupoService.deleteSigUsuarioGrupo(this.sigUsuarioGrupo.seqgrupo).subscribe(
      response => {
      this.sigUsuarioGruposTodas = response;
      this.toastr.success('O SigUsuarioGrupo foi excluido');
      template.hide();
      this.getSigUsuarioGrupos();
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      this.toastr.warning('Não foi possível excluir');
    });
  }

  editarSigUsuarioGrupo(sigUsuarioGrupo: SigUsuarioGrupo, sigUsuarioGrupoTemplate: any){
    this.modoSalvar = 'put'
    this.openModal(sigUsuarioGrupoTemplate);
    this.sigUsuarioGrupo = sigUsuarioGrupo;
    this.registerForm.patchValue(this.sigUsuarioGrupo);
  }

  novoSigUsuarioGrupo(sigUsuarioGrupoTemplate: any){
    this.modoSalvar = 'post';
    this.openModal(sigUsuarioGrupoTemplate);
  }

  salvarAlteracao(sigUsuarioGrupoTemplate: any){
    this.spinner.show();
    if(this.registerForm.valid){
      if(this.modoSalvar === 'post'){
        this.sigUsuarioGrupo = Object.assign({}, this.registerForm.value);
        this.sigUsuarioGrupoService.saveSigUsuarioGrupo(this.sigUsuarioGrupo).subscribe(
          (novoSigUsuarioGrupo: any) => {
            sigUsuarioGrupoTemplate.hide();
            this.toastr.success('O Grupo foi salvo com sucesso!');
            this.getSigUsuarioGrupos();
            this.spinner.hide();
          },error => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
      else{
        this.sigUsuarioGrupo = Object.assign({seqgrupo : this.sigUsuarioGrupo.seqgrupo}, this.registerForm.value);
        console.log(this.sigUsuarioGrupo);
        this.sigUsuarioGrupoService.putSigUsuarioGrupo(this.sigUsuarioGrupo).subscribe(
          (novoSigUsuarioGrupo: any) => {
            sigUsuarioGrupoTemplate.hide();
            this.toastr.success('O Grupo foi salvo com sucesso!');
            this.getSigUsuarioGrupos();
            this.spinner.hide();
          },error => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
    }
  }

  validacao(){
    this.registerForm = this.fb.group(
      {
        descrgrupo: ['', Validators.required],
      }
    );
  }
}
