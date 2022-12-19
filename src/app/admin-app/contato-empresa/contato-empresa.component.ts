import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContatoEmpresa } from 'src/app/sharedModels/appModels/contatoEmpresa.model copy';
import { ContatoEmpresaService } from 'src/app/sharedServices/appServices/contato-empresa.service';

@Component({
  selector: 'app-contato-empresa',
  templateUrl: './contato-empresa.component.html',
  styleUrls: ['./contato-empresa.component.css']
})
export class ContatoEmpresaComponent implements OnInit {
  contatoEmpresas: any = [];
  contatoEmpresa: any;
  contatoEmpresasFiltrados: any = [];
  registerForm!: FormGroup;
  usuarioLogado: string = localStorage.getItem('usuarioSessao')!
  bodyDeletarEvento: string = ''
  modoSalvar = 'post'

  _filtroLista!: string;
  get filtroLista(): string{
    return this._filtroLista;
  }
  set filtroLista(value: string){
    this._filtroLista = value;
    if(this.filtroLista != undefined){
      this.contatoEmpresasFiltrados = this.filtrarContatoEmpresas(this.filtroLista)
    }else{
      this.contatoEmpresasFiltrados = this.contatoEmpresas
    }
  }

  constructor(
    private http: HttpClient,
    private contatoEmpresaService: ContatoEmpresaService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {
    this.getEmpresas();
    this.validacao();
  }

  openModal(contatoEmpresaTemplate: any): void {
    this.registerForm.reset();
    contatoEmpresaTemplate.show(contatoEmpresaTemplate);
  }

  public getEmpresas(){
    this.contatoEmpresaService.getEmpresa().subscribe(response => {
      this.contatoEmpresas = response;
    })
  }

  deleteContatoEmpresas(contatoEmpresa: ContatoEmpresa, template: any) {
    this.openModal(template);
    this.contatoEmpresa = contatoEmpresa;
    this.bodyDeletarEvento = `Tem certeza que deseja excluir o Contato: ${contatoEmpresa.contatoSetor}, Código: ${contatoEmpresa.id}`;
  }

  public confirmeDelete(template: any) {
    this.contatoEmpresaService.deleteEmpresa(this.contatoEmpresa.id).subscribe(
      response => {
      this.contatoEmpresas = response;
      this.toastr.success('O Contato da Empresa foi excluido');
      template.hide();
      this.getEmpresas();
    }, error => {
      this.toastr.warning('Não foi possível excluir');
    });
  }

  editarContatoEmpresa(contatoEmpresa: ContatoEmpresa, contatoEmpresaTemplate: any){
    this.modoSalvar = 'put'
    this.openModal(contatoEmpresaTemplate);
    this.contatoEmpresa = contatoEmpresa;
    this.registerForm.patchValue(contatoEmpresa);
  }

  novoContatoEmpresa(contatoEmpresaTemplate: any){
    this.modoSalvar = 'post';
    this.openModal(contatoEmpresaTemplate);
  }

  filtrarContatoEmpresas(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.contatoEmpresas.filter(
      //contatoEmpresa => contatoEmpresa.titulo.toLocaleLowerCase().indexOf(filtrarPor) != -1
    );
  }

  salvarAlteracao(contatoEmpresaTemplate: any){
    if(this.registerForm.valid){
      if(this.modoSalvar === 'post'){
        this.contatoEmpresa = Object.assign({}, this.registerForm.value);
        this.contatoEmpresaService.saveEmpresa(this.contatoEmpresa).subscribe(
          () => {
            contatoEmpresaTemplate.hide();
            this.toastr.success('O Contato da Empresa foi salvo');
            this.getEmpresas();
          },error => {
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
      else{
        this.contatoEmpresa = Object.assign({id: this.contatoEmpresa.id}, this.registerForm.value);
        this.contatoEmpresaService.putEmpresa(this.contatoEmpresa).subscribe(
          () => {
            contatoEmpresaTemplate.hide();
            this.toastr.success('O Contato da Empresa foi salvo');
            this.getEmpresas();
          },error => {
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
    }
  }

  validacao(){
    this.registerForm = this.fb.group(
      {
        contatoSetor: ['', Validators.required],
        numeroContato: ['', Validators.required],
        responsavel: [''],
        funcionamento: ['', Validators.required],
      }
    );
  }

  public getItens(id: number){
    this.router.navigate(['contatoEmpresa',id]);
  }
}
