import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PeriodicElement } from 'src/app/coordenacao/cadastro/coordenacao-cadastro-area-responsavel/coordenacao-cadastro-area-responsavel.component';
import { SigUsuario } from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';
import { SigUsuarioGrupoService } from 'src/app/sharedServices/usuarioServices/sigUsuarioGrupo.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  deleteOpcao: string = '';
  public id!: number;
  sigUsuarioGrupos!: any;
  selectGrupos: any = [];
  sigUsuariosTodas: any = [];
  sigUsuario: any;
  sigUsuariosFiltrados: any = [];
  registerForm!: FormGroup;
  usuarioLogado: string = localStorage.getItem('usuarioSessao')!;
  bodyDeletarEvento: string = '';
  modoSalvar = 'post';

  nomeColunas = ['flgativo', 'usuario', 'nome', 'seqgrupo', 'acoes'];
  public sigUsuarios = new MatTableDataSource<SigUsuario>();
  clickedRows = new Set<PeriodicElement>();
  isChecked = true;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private grupoService: SigUsuarioGrupoService,
    private sigUsuarioService: SigUsuarioService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((parametro: any) => {
      this.id! = parseInt(parametro.id);
    });
  }

  ngOnInit(): void {
    this.getGrupo();
    this.sigUsuarios.sortingDataAccessor = (data: any, sortHeaderId) =>
      data[sortHeaderId];
    this.selectGrupos.sortingDataAccessor = (
      data: any,
      sortHeaderId: string | number
    ) => data[sortHeaderId];
    this.getSigUsuarios();
    this.validacao();
  }

  ngAfterViewInit() {
    this.selectGrupos.sort = this.sort;
    this.sigUsuarios.sort = this.sort;
    this.sigUsuarios.paginator = this.paginator;
  }

  openModal(sigUsuarioTemplate: any): void {
    sigUsuarioTemplate.show(sigUsuarioTemplate, {
      backdropClass: 'light-blue-backdrop',
    });
  }

  public getSigGrupos(id: number) {
    this.spinner.show();
    this.sigUsuarioService.getGruposSigUsuarioById(id).subscribe((response) => {
      this.sigUsuarioGrupos = response;
      this.deleteOpcao = '';
      this.spinner.hide();
    });
  }

  public getSigUsuarios() {
    this.spinner.show();
    this.sigUsuarioService.getSigUsuario().subscribe((response) => {
      this.sigUsuarios.data = response as SigUsuario[];
      this.getSigGrupos(this.sigUsuario?.sequsuario);

      this.spinner.hide();
    });
  }

  getGrupo() {
    this.spinner.show();
    this.grupoService.getSigUsuarioGrupo().subscribe((response) => {
      this.selectGrupos = response;
    });
  }

  getGrupoDescr(id: number) {
    for (let i = 0; i < this.selectGrupos.length; i++) {
      if (id == this.selectGrupos[i].seqgrupo) {
        return this.selectGrupos[i].descrgrupo;
      }
    }
  }

  // Desativa usuário
  desativaSigUsuarios(template: any) {
    this.spinner.show();
    this.sigUsuario = Object.assign(this.sigUsuario);
    this.sigUsuario.sequsuario = this.sigUsuario.sequsuario;
    this.sigUsuarioService.putSigUsuario(this.sigUsuario).subscribe(
      (novoClasseMapeamentoEspecifico: any) => {
        this.toastr.success('O Usuário foi alterado com sucesso');
        template.hide();
        this.getSigUsuarios();
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.warning('Não foi possível salvar as alterações');
      }
    );
  }

  // Reseta senha do usuário
  resetaSenhaSigUsuarios(template: any) {
    this.spinner.show();
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'put') {
        this.sigUsuario = Object.assign({}, this.registerForm.value);
      }
    }
    this.sigUsuario = Object.assign(this.sigUsuario);
    this.sigUsuarioService.resetSenhaSigUsuario(this.sigUsuario).subscribe(
      (novoClasseMapeamentoEspecifico: any) => {
        this.toastr.success('O Usuário teve a senha resetada');
        template.hide();
        this.getSigUsuarios();
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.warning('Não foi possível salvar as alterações');
      }
    );
  }

  // Exclui usuário
  excluiSigUsuarios(template: any) {
    this.spinner.show();
    this.sigUsuarioService
      .deleteSigUsuario(this.sigUsuario.sequsuario)
      .subscribe(
        (response) => {
          this.sigUsuariosTodas = response;
          this.toastr.success('O Usuário foi excluido');
          template.hide();
          this.getSigUsuarios();
          this.spinner.hide();
        },
        (error) => {
          this.spinner.hide();
          this.toastr.warning('Não foi possível excluir');
        }
      );
  }

  novoSigUsuarios(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  public filtrar = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.sigUsuarios.filter = value;
    }
  };

  // Abre o modal de confirmação de EXCLUSÃO de usuário
  excluiUsuarioModal(sigUsuario: SigUsuario, template: any) {
    this.openModal(template);
    this.sigUsuario = sigUsuario;
  }

  // Abre o modal de confirmação de RESET DE SENHA de usuário
  resetaSenhaModal(sigUsuario: SigUsuario, sigUsuarioTemplate: any) {
    this.modoSalvar = 'put';
    this.openModal(sigUsuarioTemplate);
    this.sigUsuario = sigUsuario;
    this.registerForm.patchValue(sigUsuario);
  }

  // Abre o modal de confirmação de DESATIVAÇÃO de usuário
  desativaUsuarioModal(
    event: MatSlideToggleChange,
    usuario: any,
    template: any
  ) {
    this.openModal(template);
    this.sigUsuario = Object.assign(usuario);
    this.sigUsuario.sequsuario = usuario.sequsuario;
    this.sigUsuario.flgativo = event.checked ? 'S' : 'N';
  }

  editarSigUsuario(sigUsuario: SigUsuario, sigUsuarioTemplate: any) {
    this.modoSalvar = 'put';
    this.openModal(sigUsuarioTemplate);
    this.sigUsuario = sigUsuario;
    this.registerForm.patchValue(sigUsuario);
  }

  novoSigUsuario(sigUsuarioTemplate: any) {
    this.modoSalvar = 'post';
    this.openModal(sigUsuarioTemplate);
  }

  salvarAlteracao(sigUsuarioTemplate: any) {
    this.spinner.show();
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.sigUsuario = Object.assign({}, this.registerForm.value);
        this.sigUsuarioService.saveSigUsuario(this.sigUsuario).subscribe(
          (novoSigUsuario: any) => {
            sigUsuarioTemplate.hide();
            this.spinner.hide();
            this.toastr.success('O SigUsuario foi salvo');
            this.getSigUsuarios();
          },
          (error) => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível salvar');
          }
        );
      } else {
        this.sigUsuario = Object.assign(
          { id: this.sigUsuario.id },
          this.registerForm.value
        );
        this.sigUsuarioService.putSigUsuario(this.sigUsuario).subscribe(
          (novoSigUsuario: any) => {
            sigUsuarioTemplate.hide();
            this.spinner.hide();
            this.toastr.success('O SigUsuario foi salvo');
            this.getSigUsuarios();
          },
          (error) => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
    }
  }

  salvarNovoSigUsuario(sigUsuarioTemplate: any) {
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.sigUsuario = Object.assign({}, this.registerForm.value);
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

  validacao() {
    this.registerForm = this.fb.group({
      sequsuario: ['', Validators.required],
      usuario: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      flgaltera: ['', Validators.required],
      versaoatual: ['', Validators.required],
      ultlogin: ['', Validators.required],
      ultlogout: ['', Validators.required],
      seqgrupo: ['', Validators.required],
      flgativo: ['', Validators.required],
      coordzoomhor: ['', Validators.required],
      coordzoomver: ['', Validators.required],
      coordtamarea1: ['', Validators.required],
      coordtamarea2: ['', Validators.required],
      direstat: ['', Validators.required],
      dirplanej: ['', Validators.required],
      seqregional: ['', Validators.required],
      seqnop: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      matricula: ['', Validators.required],
      dthrinativado: ['', Validators.required],
      dthralteracao: ['', Validators.required],
      descrcargo: ['', Validators.required],
    });
  }

  clonaUsuario(element: any) {
    this.router.navigate(['usuario/clonar', element]);
  }

  public getInfoUsuario(sequsuario: any) {
    this.router.navigate(['usuario/editar', sequsuario]);
  }
}
