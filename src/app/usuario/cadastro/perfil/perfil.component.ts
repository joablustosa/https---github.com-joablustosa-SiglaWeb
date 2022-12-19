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
import { SigUsuarioPerfil } from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SigPerfilService } from 'src/app/sharedServices/usuarioServices/sigPerfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  sigPerfilsTodas: any = [];
  sigPerfil: any;
  sigPerfilsFiltrados: any = [];
  registerForm!: FormGroup;
  usuarioLogado: string = localStorage.getItem('usuarioSessao')!
  bodyDeletarEvento: string = ''
  modoSalvar = 'post'
  nomeColunas = ["descrperfil", "acao"];
  public sigPerfis = new MatTableDataSource<SigUsuarioPerfil>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private http: HttpClient,
    private sigPerfilService: SigPerfilService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.sigPerfis.sortingDataAccessor = (data: any, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
    this.getSigUsuarioPerfils();
    this.validacao();
  }

  ngAfterViewInit(): void {
    this.sigPerfis.sort = this.sort;
    this.sigPerfis.paginator = this.paginator;
  }

  public filtrar = (target: any) => {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.sigPerfis.filter = value;
    }
  }

  openModal(sigPerfilTemplate: any): void {
    this.registerForm.reset();
    sigPerfilTemplate.show(sigPerfilTemplate);
  }

  public getSigUsuarioPerfils(){
    this.spinner.show();
    this.sigPerfilService.getSigPerfil().subscribe(response => {
      this.sigPerfis.data = response as SigUsuarioPerfil[];
      this.spinner.hide();
    });
  }

  deleteUsuarioPerfil(sigPerfil: SigUsuarioPerfil, template: any) {
    this.openModal(template);
    this.sigPerfil = sigPerfil;
    this.bodyDeletarEvento = `Tem certeza que deseja excluir o Perfil: X, Código: X`;
  }

  public confirmeDelete(template: any) {
    this.sigPerfilService.deleteSigPerfil(this.sigPerfil.seqperfil).subscribe(
      response => {
      this.sigPerfilsTodas = response;
      this.toastr.success('O Perfil foi excluido');
      template.hide();
      this.getSigUsuarioPerfils();
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      this.toastr.warning('Não foi possível excluir');
    });
  }

  editarSigUsuarioPerfil(sigPerfil: SigUsuarioPerfil, sigPerfilTemplate: any){
    this.modoSalvar = 'put'
    this.openModal(sigPerfilTemplate);
    this.sigPerfil = sigPerfil;
    this.registerForm.patchValue(sigPerfil);
  }

  novoSigUsuarioPerfil(sigPerfilTemplate: any){
    this.modoSalvar = 'post';
    this.openModal(sigPerfilTemplate);
  }

  salvarAlteracao(sigPerfilTemplate: any){
    this.spinner.show();
    if(this.registerForm.valid){
      if(this.modoSalvar === 'post'){
        this.sigPerfil = Object.assign({}, this.registerForm.value);
        this.sigPerfilService.saveSigPerfil(this.sigPerfil).subscribe(
          (novoSigUsuarioPerfil: any) => {
            sigPerfilTemplate.hide();
            this.toastr.success('O Perfil foi salvo');
            this.getSigUsuarioPerfils();
            this.spinner.hide();
          },error => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
      else{
        this.sigPerfil = Object.assign({seqperfil: this.sigPerfil.seqperfil}, this.registerForm.value);
        this.sigPerfilService.putSigPerfil(this.sigPerfil).subscribe(
          (novoSigUsuarioPerfil: any) => {
            sigPerfilTemplate.hide();
            this.toastr.success('O Perfil foi salvo');
            this.getSigUsuarioPerfils();
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
        descrperfil: ['', Validators.required],
      }
    );
  }


  
  public getInfoPerfil(seqfuncao: any){
    this.router.navigate(['funcao/editar', seqfuncao]);
  }
}
