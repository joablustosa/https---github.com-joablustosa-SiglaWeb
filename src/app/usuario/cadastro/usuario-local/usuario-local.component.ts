import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SigUsuario } from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SigUsuarioLocal } from 'src/app/sharedModels/usuarioModels/sigUsuarioLocal.model';
import { SigUsuarioLocalService } from 'src/app/sharedServices/usuarioServices/sigUsuarioLocal.service';

@Component({
  selector: 'app-usuario-local',
  templateUrl: './usuario-local.component.html',
  styleUrls: ['./usuario-local.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsuarioLocalComponent implements OnInit {
  sigUsuariosTodas: any = [];
  sigUsuario: any;
  sigUsuariosFiltrados: any = [];
  registerForm!: FormGroup;
  usuarioLogado: string = localStorage.getItem('usuarioSessao')!
  bodyDeletarEvento: string = ''
  modoSalvar = 'post'
  columnsToDisplay = ['Nome Completo'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: SigUsuario | null;
  dataSource = new MatTableDataSource<SigUsuario>();;

  isChecked = true;

  usuarioLocalColumns = [
    'usuarioaerop',
    'nome',
    'flgaltera',
    'acoes',
  ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private sigUsuarioLocalService: SigUsuarioLocalService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getSigUsuarioLocais();
    //this.validacao();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openModal(sigUsuarioTemplate: any): void {
    //this.registerForm.reset();
    sigUsuarioTemplate.show(sigUsuarioTemplate, { backdropClass: 'light-blue-backdrop' });
  }

  public getSigUsuarioLocais(){
    this.spinner.show();
    this.sigUsuarioLocalService.getSigUsuarioLocal().subscribe(response => {
      this.dataSource.data = response as SigUsuarioLocal[];
      this.spinner.hide();
    })
  }

  resetaSenhaSigUsuarios(template: any) {
    this.sigUsuarioLocalService.resetSenhaSigUsuario(this.sigUsuario.sequsuarioaerop).subscribe(response => {
      this.getSigUsuarioLocais();
      template.hide();
    })
  }

  novoSigUsuarios(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  mensagemNovoUsuario(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  resetaSenha(sigUsuario: SigUsuario, sigUsuarioTemplate: any) {
    this.modoSalvar = 'put'
    this.openModal(sigUsuarioTemplate);
    this.sigUsuario = sigUsuario;
    this.registerForm.patchValue(sigUsuario);
  }

  public filtrar = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.dataSource.filter = value;
    }
  }

  // deleteSigUsuarios(sigUsuario: SigUsuario, template: any) {
  //   this.openModal(template);
  //   this.sigUsuario = sigUsuario;
  //   this.bodyDeletarEvento = `Tem certeza que deseja excluir o Evento: X, Código: X`;
  // }

  // public confirmeDelete(template: any) {
  //   this.sigUsuarioService.deleteSigUsuario(this.sigUsuario.id).subscribe(
  //     response => {
  //     this.sigUsuariosTodas = response;
  //     this.toastr.success('O SigUsuario foi excluido');
  //     template.hide();
  //     this.getSigUsuarios();
  //   }, error => {
  //     this.toastr.warning('Não foi possível excluir');
  //   });
  // }

  editarSigUsuario(sigUsuario: SigUsuario, sigUsuarioTemplate: any) {
    this.modoSalvar = 'put'
    this.openModal(sigUsuarioTemplate);
    this.sigUsuario = sigUsuario;
    this.registerForm.patchValue(sigUsuario);
  }

  novoSigUsuario(sigUsuarioTemplate: any) {
    this.modoSalvar = 'post';
    this.openModal(sigUsuarioTemplate);
  }

  salvarAlteracao(sigUsuarioTemplate: any) {
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.sigUsuario = Object.assign({}, this.registerForm.value);
        // this.sigUsuarioService.saveSigUsuario(this.sigUsuario).subscribe(
        //   (novoSigUsuario: any) => {
        //     sigUsuarioTemplate.hide();
        //     this.toastr.success('O SigUsuario foi salvo');
        //     this.getSigUsuarios();
        //   },error => {
        //     this.toastr.warning('Não foi possível salvar');
        //   }
        // );
      }
      else {
        this.sigUsuario = Object.assign({ id: this.sigUsuario.id }, this.registerForm.value);
        // this.sigUsuarioService.putSigUsuario(this.sigUsuario).subscribe(
        //   (novoSigUsuario: any) => {
        //     sigUsuarioTemplate.hide();
        //     this.toastr.success('O SigUsuario foi salvo');
        //     this.getSigUsuarios();
        //   },error => {
        //     this.toastr.warning('Não foi possível salvar');
        //   }
        // );
      }
    }
  }

  public toggle(event: MatSlideToggleChange, usuario: any) {
    this.sigUsuario = Object.assign(usuario);
    this.sigUsuario.sequsuario = usuario.sequsuario;
    this.sigUsuario.flgativo = event.checked === false ? 'N' : 'S';
    // this.desativaSigUsuarios(this.sigUsuario);
    // //console.log(usuario);
    // this.sigUsuarioService.putSigUsuario(this.sigUsuario).subscribe(
    //   (novoClasseMapeamentoEspecifico: any) => {
    //     this.toastr.success('O Mapeamento de Classe Especifico foi salvo');
    //     this.getSigUsuarios();
    //   },error => {
    //     this.toastr.warning('Não foi possível salvar');
    //   }
    // );
  }

  salvarNovoSigUsuario(sigUsuarioTemplate: any) {
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.sigUsuario = Object.assign({}, this.registerForm.value);
        // this.sigUsuarioService.saveSigUsuario(this.sigUsuario).subscribe(
        //   (novoSigUsuario: any) => {
        //     sigUsuarioTemplate.hide();
        //     this.toastr.success('O SigUsuario foi salvo');
        //     this.getSigUsuarios();
        //   },error => {
        //     this.toastr.warning('Não foi possível salvar');
        //   }
        // );
      }
    }
  }

  retornoToggle(ativo: string) {
    if (ativo === 'N') {
      return false;
    } else {
      return true;
    }
  }

  // validacao() {
  //   this.registerForm = this.fb.group(
  //     {
  //       sequsuario: ['', Validators.required],
  //       usuario: ['', Validators.required],
  //       nome: ['', Validators.required],
  //       senha: ['', Validators.required],
  //       flgaltera: ['', Validators.required],
  //       versaoatual: ['', Validators.required],
  //       ultlogin: ['', Validators.required],
  //       ultlogout: ['', Validators.required],
  //       seqgrupo: ['', Validators.required],
  //       flgativo: ['', Validators.required],
  //       coordzoomhor: ['', Validators.required],
  //       coordzoomver: ['', Validators.required],
  //       coordtamarea1: ['', Validators.required],
  //       coordtamarea2: ['', Validators.required],
  //       direstat: ['', Validators.required],
  //       dirplanej: ['', Validators.required],
  //       seqregional: ['', Validators.required],
  //       seqnop: ['', Validators.required],
  //       email: ['', Validators.required],
  //       cpf: ['', Validators.required],
  //       matricula: ['', Validators.required],
  //       dthrinativado: ['', Validators.required],
  //       dthralteracao: ['', Validators.required],
  //       descrcargo: ['', Validators.required],
  //     }
  //   );
  // }

  public getInfoUsuario(id: number) {
    this.router.navigate(['usuario/editar', id]);
  }
}
