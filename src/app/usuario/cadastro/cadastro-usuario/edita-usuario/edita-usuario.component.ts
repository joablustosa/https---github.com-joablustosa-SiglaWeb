import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, min, startWith } from 'rxjs/operators';
import {
  Funcao,
  FuncaoAutoComplete,
  Grupos,
  Modulo,
} from 'src/app/sharedModels/usuarioModels/sigFuncao.model';
import { SigPerfilModel } from 'src/app/sharedModels/usuarioModels/sigPerfil.model';
import { SigPerfilFuncaoModel } from 'src/app/sharedModels/usuarioModels/sigPerfilFuncao.model';
import {
  SigGrupoUsuario,
  SigPerfilUsuario,
  SigUsuario,
  SigUsuarioEdit,
  SigFuncaoUsuario,
  SigUsuarioFuncao,
} from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SigGrupoModel } from 'src/app/sharedModels/usuarioModels/sigUsuarioGrupo.model';
import { SelectService } from 'src/app/sharedServices/selectServices/select.service';
import { SigFuncaoService } from 'src/app/sharedServices/usuarioServices/sigFuncao.service';
import { SigPerfilService } from 'src/app/sharedServices/usuarioServices/sigPerfil.service';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';
import { SigUsuarioGrupoService } from 'src/app/sharedServices/usuarioServices/sigUsuarioGrupo.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class EditaUsuarioComponent implements OnInit {
  registerForm!: FormGroup;
  perfilForm!: FormGroup;
  funcaoForm!: FormGroup;
  grupoForm!: FormGroup;
  sigUsuario!: SigUsuarioEdit;
  sigUsuarioEdit!: any;
  sigUsuarioPerfil!: any;
  sigUsuarioGrupos!: any;
  public id!: number;
  modoSalvar = 'post';
  sigUsuarioReset: any;
  selectGrupos: any = [];
  selectFuncoes: any = [];
  sigPerfilUsuario!: SigPerfilUsuario;
  sigFuncaoUsuario!: SigFuncaoUsuario;
  sigGrupoUsuario!: SigGrupoUsuario;
  bodyDeletarEvento: string = '';
  deleteOpcao: string = '';
  flgAltera = true;
  sigPerfilFuncao!: SigFuncaoUsuario;

  // Funcoes selecionadas
  tempFuncaoSelecionada: SigFuncaoUsuario[] = [];

  selecaoPerfil = new SelectionModel<SigPerfilModel>(true, []);
  selecaoFuncao = new SelectionModel<FuncaoAutoComplete>(true, []);

  controlFuncao = new FormControl();
  controlPerfil = new FormControl();
  controlUsuario = new FormControl('', [Validators.required]);
  controlNome = new FormControl('', [Validators.required]);

  selectedRegional: string = '';

  ELEMENT_PERFIL: any = [];
  ELEMENT_FUNCAO: any = [];

  selectFuncoesAutoComplete: FuncaoAutoComplete[] = [];
  selectPerfis: SigPerfilModel[] = [];
  funcoesFiltradas!: Observable<FuncaoAutoComplete[]>;
  perfisFiltrados!: Observable<SigPerfilModel[]>;
  selectNops: any = [];
  selectRegionais: any = [];

  expandedElement!: Modulo | null;
  expandedElement2!: Grupos | null;

  modulos: Modulo[] = [];
  grupos: Grupos[] = [];
  funcoes: Funcao[] = [];

  public usuarioFuncoes = new MatTableDataSource<SigFuncaoUsuario>();
  public perfilFuncoes = new MatTableDataSource<SigPerfilFuncaoModel>();

  // Table Columns
  columnsProfile: string[] = ['profileSelection', 'profileDescription'];
  columnsModule: string[] = ['moduleTitle', 'modulePermission'];
  columnsGroup: string[] = ['groupTitle', 'groupPermission'];
  columnsFunction: string[] = ['functionTitle', 'functionPermission'];

  // Array of nop
  nops: any[] = [];

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private sigUsuarioService: SigUsuarioService,
    private perfilService: SigPerfilService,
    private funcaoService: SigFuncaoService,
    private grupoService: SigUsuarioGrupoService,
    private selectService: SelectService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.activatedRoute.params.subscribe((parametro: any) => {
      this.id! = parseInt(parametro.id);
    });
  }

  ngOnInit(): void {
    this.getSigUsuarios(this.id);
    this.getFuncaoAutoComplete();
    this.getPerfilAutoComplete();
    this.getGrupo();
    this.validacao();
    this.getNop();
    this.getRegionalNop();
    this.getProcessedModules();
  }

  ngAfterViewInit(): void {
    this.usuarioFuncoes.sort = this.sortFuncao;
    this.usuarioFuncoes.paginator = this.paginatorFuncao;
    this.perfilFuncoes.sort = this.sortPerfil;
    this.perfilFuncoes.paginator = this.paginatorPerfil;
  }

  //  --------------------------- INICIO CONTROLE DE SELEÇÃO DE PERFIS --------------------------------------------
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selecaoPerfil.selected.length;
    const numRows = this.selectPerfis.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selecaoPerfil.clear();
      return;
    }
    this.selecaoPerfil.select(...this.selectPerfis);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SigPerfilModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selecaoPerfil.isSelected(row) ? 'deselect' : 'select'} row ${
      row.seqperfil + 1
    }`;
  }

  adicionaPerfisClonados() {
    for (var i = 0; i < this.selectPerfis.length; i++) {
      if (
        this.ELEMENT_PERFIL.some(
          (x: { seqperfil: string }) =>
            x.seqperfil == this.selectPerfis[i].seqperfil
        )
      ) {
        this.selecaoPerfil.select(this.selectPerfis[i]);
      }
    }
  }
  //  --------------------------- FIM CONTROLE DE SELEÇÃO DE PERFIS --------------------------------------------

  //  ------------------------------- INICIO CONTROLE DE FUNÇÕES -----------------------------------------------
  getProcessedModules() {
    this.funcaoService.getSigFuncaoTratada().subscribe((response) => {
      this.modulos = response as Modulo[];
      this.spinner.hide();
    });
  }

  salvarUsuario() {
    this.spinner.show();
    if (this.registerForm.valid) {
      // Object assignment
      var usuarioTemp = Object.assign(
        {
          flgaltera: 'S',
          senha: 'TGJHFEIEMELJPJTOSOWO',
          flgativo: 'S',
        },
        this.registerForm.value
      );

      // If empty, receive null
      if (usuarioTemp.seqgrupo == '') {
        usuarioTemp.seqgrupo = null;
      }
      if (usuarioTemp.seqnop == '') {
        usuarioTemp.seqnop = null;
      }
      if (usuarioTemp.seqregional == '') {
        usuarioTemp.seqregional = null;
      }
      if (usuarioTemp.cpf == '') {
        usuarioTemp.cpf = null;
      }

      // Saving new user
      this.sigUsuarioService.saveSigUsuario(usuarioTemp).subscribe(
        (novoSigUsuario: any) => {
          // Saving profiles
          for (var i = 0; i < this.selecaoPerfil.selected.length; i++) {
            this.spinner.show();
            var perfilUsuarioTemp = Object.assign({
              sequsuario: novoSigUsuario.sequsuario,
              seqperfil: this.selecaoPerfil.selected[i].seqperfil,
            });
            if (
              perfilUsuarioTemp.seqperfil != null &&
              perfilUsuarioTemp.sequsuario != null
            ) {
              this.sigUsuarioService
                .saveSigPerfilUsuario(perfilUsuarioTemp)
                .subscribe(
                  (novoPerfilFuncao: any) => {},
                  (error) => {
                    this.toastr.warning('seqperfil e sequsuario null');
                  }
                );
            }
          }

          // Saving functions
          for (var i = 0; i < this.tempFuncaoSelecionada.length; i++) {
            this.spinner.show();
            var funcaoUsuarioTemp = Object.assign({
              sequsuario: novoSigUsuario.sequsuario,
              codfuncao: this.tempFuncaoSelecionada[i].codfuncao,
              flgpermissao: this.tempFuncaoSelecionada[i].flgpermissao,
              contador: 0,
            });

            if (
              funcaoUsuarioTemp.codfuncao != null &&
              funcaoUsuarioTemp.sequsuario != null &&
              funcaoUsuarioTemp.flgpermissao != null
            ) {
              this.sigUsuarioService
                .saveSigFuncaoUsuario(funcaoUsuarioTemp)
                .subscribe(
                  (novoPerfilFuncao: any) => {
                    //this.controlFuncao.reset;
                  },
                  (error) => {
                    this.toastr.warning(
                      'cod funcao sequsuario flgpermissao null'
                    );
                  }
                );
            }
            this.spinner.hide();
          }

          this.router.navigate(['usuario/cadastrousuario']);
          this.spinner.hide();
          this.toastr.success('O usuário foi salvo com sucesso!');
        },

        (error) => {
          this.spinner.hide();
          this.toastr.warning('Não foi possível salvar');
        }
      );
    }
  }

  bulkyAction(permissao: string, funcoes: any) {
    for (var i = 0; i < funcoes.length; i++) {
      if (
        this.tempFuncaoSelecionada.some(
          (x) => x.codfuncao == funcoes[i].codfuncao
        )
      ) {
        this.tempFuncaoSelecionada.splice(
          this.tempFuncaoSelecionada.findIndex(
            (item: any) => item.codfuncao === funcoes[i].codfuncao
          ),
          1
        );
      }
      if (permissao != '') {
        const atualFuncao = {
          codfuncao: funcoes[i].codfuncao,
          flgpermissao: permissao,
          sequsuario: 0,
          contador: 0,
        };
        this.tempFuncaoSelecionada.push(atualFuncao);
      }
    }
  }

  adicionaFuncesClonadas() {
    for (var i = 0; i < this.ELEMENT_FUNCAO.length; i++) {
      this.adicionaPermissao(
        this.ELEMENT_FUNCAO[i].codfuncao,
        this.ELEMENT_FUNCAO[i].flgpermissao
      );
    }
  }

  adicionaPermissao(element: any, permissao: string) {
    this.spinner.show();

    if (this.tempFuncaoSelecionada.some((x) => x.codfuncao == element)) {
      this.tempFuncaoSelecionada.splice(
        this.tempFuncaoSelecionada.findIndex(
          (item: any) => item.codfuncao === element
        ),
        1
      );
    }
    const atualFuncao = {
      codfuncao: element,
      flgpermissao: permissao,
      sequsuario: 0,
      contador: 0,
    };
    
    this.tempFuncaoSelecionada.push(atualFuncao);

    if (permissao == '') {
      this.tempFuncaoSelecionada.splice(
        this.tempFuncaoSelecionada.findIndex(
          (item: any) => item.codfuncao === element
        ),
        1
      );
    }

    this.spinner.hide();
  }

  isSelected(element: any, permissao: string) {
    var index = this.tempFuncaoSelecionada
      .map((x) => x.codfuncao)
      .indexOf(element);
    if (index > -1) {
      return this.tempFuncaoSelecionada[index].flgpermissao == permissao;
    }
    return false;
  }

  isEmpty(element: any) {
    if (this.tempFuncaoSelecionada.some((x) => x.codfuncao == element)) {
      return false;
    }
    return true;
  }
  //  -------------------------------- FIM CONTROLE DE FUNÇÕES --------------------------------------------

  // Change Regional
  changeRegional(id: number) {
    this.nops = this.selectRegionais.find(
      (item: { seqregional: number }) => item.seqregional === id
    ).nops;
  }

  @ViewChild(MatSort) sortFuncao!: MatSort;
  @ViewChild(MatPaginator) paginatorFuncao!: MatPaginator;
  @ViewChild(MatSort) sortPerfil!: MatSort;
  @ViewChild(MatPaginator) paginatorPerfil!: MatPaginator;

  color: ThemePalette = 'accent';
  flgpermissao = true;

  getGrupo() {
    this.spinner.show();
    this.grupoService.getSigUsuarioGrupo().subscribe((response) => {
      this.selectGrupos = response;
    });
  }

  getFuncaoAutoComplete() {
    this.spinner.show();
    this.funcaoService.getSigFuncao().subscribe((response) => {
      this.selectFuncoesAutoComplete = response as FuncaoAutoComplete[];
      this.spinner.hide();
      this.funcoesFiltradas = this.controlFuncao.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : value?.name;
          return name
            ? this._filtraFuncao(name as string)
            : this.selectFuncoesAutoComplete.slice();
        })
      );
    });
  }

  getPerfilAutoComplete() {
    this.spinner.show();
    this.perfilService.getSigPerfil().subscribe((response) => {
      this.selectPerfis = response as SigPerfilModel[];
      this.spinner.hide();
      this.perfisFiltrados = this.controlPerfil.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : value?.name;
          return name
            ? this._filtraPerfil(name as string)
            : this.selectPerfis.slice();
        })
      );
    });
  }

  selectNop = '';
  selectNopsObj: any = {};
  onChangeNop = () => {
    this.selectNopsObj = this.selectNops.find(
      (c: any) => c.make == this.selectNop
    );
  };
  getNop() {
    this.selectService.getNop().subscribe((response) => {
      this.selectNops = response;
    });
  }

  selectRegional = '';
  selectRegionaisObj: any = {};
  onChangeRegional = () => {
    this.selectRegionaisObj = this.selectRegionais.find(
      (c: any) => c.make == this.selectRegional
    );
  };
  getRegionalNop() {
    this.selectService.getRegionalNop().subscribe((response) => {
      this.selectRegionais = response;
    });
  }

  getPerfilByIdPerfil(idUsuario: number) {
    this.spinner.show();
    this.sigUsuarioService
      .getPerfisSigUsuarioById(idUsuario)
      .subscribe((response) => {
        this.selectPerfis = response as SigPerfilModel[];
        this.spinner.hide();
      });
  }

  public filtrarFuncao = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.usuarioFuncoes.filter = value;
    }
  };

  public filtrarPerfil = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.perfilFuncoes.filter = value;
    }
  };

  exibeFuncao(funcao: FuncaoAutoComplete): string {
    return funcao && funcao.descrfuncao ? funcao.descrfuncao : '';
  }

  exibePerfil(funcao: SigPerfilModel): string {
    return funcao && funcao.descrperfil ? funcao.descrperfil : '';
  }

  private _filtraFuncao(descrfuncao: string): FuncaoAutoComplete[] {
    const valorFiltradoFuncao = descrfuncao.toLowerCase();
    return this.selectFuncoesAutoComplete.filter((funcao) =>
      funcao.descrfuncao.toLowerCase().includes(valorFiltradoFuncao)
    );
  }

  private _filtraPerfil(descrperfil: string): SigPerfilModel[] {
    const valorFiltradoPerfil = descrperfil.toLowerCase();
    return this.selectPerfis.filter((perfil) =>
      perfil.descrperfil.toLowerCase().includes(valorFiltradoPerfil)
    );
  }

  // FUNÇÃO QUE CHAMA TODAS AS OUTRAS FUNÇÕES, PERFIS E GRUPOS
  public getSigUsuarios(id: number) {
    this.spinner.show();
    this.sigUsuarioService.getSigUsuariosById(id).subscribe((response) => {
      this.sigUsuario = response as SigUsuarioEdit;
      this.registerForm.patchValue(this.sigUsuario);
      this.getSigFuncoes(this.sigUsuario.sequsuario);
      this.getSigPerfis(this.sigUsuario.sequsuario);
      this.getSigGrupos(this.sigUsuario.sequsuario);
      this.spinner.hide();
    });
  }

  public getSigFuncoes(id: number) {
    this.spinner.show();
    this.sigUsuarioService
      .getFuncoesSigUsuarioById(id)
      .subscribe((response) => {
        this.ELEMENT_FUNCAO = response as unknown as SigUsuarioFuncao[];
        this.usuarioFuncoes.data = response as unknown as SigFuncaoUsuario[];
        this.deleteOpcao = '';
        this.spinner.hide();
        this.adicionaFuncesClonadas();
      });
  }

  public getSigPerfis(id: number) {
    this.spinner.show();
    this.sigUsuarioService.getPerfisSigUsuarioById(id).subscribe((response) => {
      this.perfilFuncoes.data = response as SigPerfilFuncaoModel[];
      this.ELEMENT_PERFIL = response as SigPerfilModel[];
      this.deleteOpcao = '';
      this.spinner.hide();
      this.adicionaPerfisClonados();
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

  validacao() {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      usuario: ['', Validators.required],
      cpf: [''],
      matricula: [''],
      email: [''],
      seqgrupo: [''],
      seqnop: [''],
      seqregional: [''],
    });
  }

  salvarPerfilUsuario() {
    this.spinner.show();
    var perfilSelecionada = Object.assign({}, this.controlPerfil.value);
    this.sigPerfilUsuario = Object.assign({
      sequsuario: this.id,
      seqperfil: perfilSelecionada.seqperfil,
    });
    if (
      this.sigPerfilUsuario.seqperfil != null &&
      this.sigPerfilUsuario.sequsuario != null
    ) {
      this.sigUsuarioService
        .saveSigPerfilUsuario(this.sigPerfilUsuario)
        .subscribe(
          (novoPerfilFuncao: any) => {
            this.controlPerfil.reset;
            this.spinner.hide();
            this.toastr.success('O Perfil foi salvo');
            this.getSigPerfis(this.sigUsuario.sequsuario);
          },
          (error) => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível salvar');
          }
        );
    }
  }

  salvarEdicaoUsuario(sigUsuario: any) {
    this.spinner.show();
    this.sigUsuario = Object.assign(
      {
        coordtamarea1: sigUsuario.coordtamarea1,
        coordtamarea2: sigUsuario.coordtamarea2,
        coordzoomhor: sigUsuario.coordzoomhor,
        coordzoomver: sigUsuario.coordzoomver,
        descrcargo: sigUsuario.descrcargo,
        direstat: sigUsuario.direstat,
        dirplanej: sigUsuario.dirplanej,
        dthralteracao: sigUsuario.dthralteracao,
        dthrinativado: sigUsuario.dthrinativado,
        flgaltera: sigUsuario.flgaltera,
        flgativo: sigUsuario.flgativo,
        senha: sigUsuario.senha,
        sequsuario: sigUsuario.sequsuario,
        ultlogin: sigUsuario.ultlogin,
        ultlogout: sigUsuario.ultlogout,
        versaoatual: sigUsuario.versaoatual,
      },
      this.registerForm.value
    );
    if (
      this.sigUsuario.sequsuario != null &&
      this.sigUsuario.usuario != null &&
      this.sigUsuario.nome != '' &&
      this.sigUsuario.nome != null
    ) {
      this.sigUsuarioService.putEditaSigUsuario(this.sigUsuario).subscribe(
        (novoPerfilFuncao: any) => {
          this.vaiParaPaginaUsuario();
          this.spinner.hide();
          this.toastr.success('Usuário editado com sucesso');
        },
        (error) => {
          this.spinner.hide();
          this.toastr.warning('Não foi possível salvar');
        }
      );
    }
  }

  salvarFuncaoUsuario() {
    this.spinner.show();
    var funcaoSelecionada = Object.assign({}, this.controlFuncao.value);
    this.sigFuncaoUsuario = Object.assign({
      sequsuario: this.id,
      codfuncao: funcaoSelecionada.codfuncao,
      flgpermissao: this.convertFuncao(this.flgpermissao),
      contador: 0,
    });
    if (
      this.sigFuncaoUsuario.codfuncao != null &&
      this.sigFuncaoUsuario.sequsuario != null &&
      this.sigFuncaoUsuario.flgpermissao != null
    ) {
      this.sigUsuarioService
        .saveSigFuncaoUsuario(this.sigFuncaoUsuario)
        .subscribe(
          (novoPerfilFuncao: any) => {
            this.controlFuncao.reset;
            this.spinner.hide();
            this.toastr.success('Permissão foi salva');
            this.getSigFuncoes(this.id);
          },
          (error) => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível salvar');
          }
        );
    }
  }

  convertFuncao(flgpermissao: boolean) {
    var resultado;
    if (flgpermissao) {
      resultado = 'A';
      return resultado;
    } else {
      resultado = 'B';
      return resultado;
    }
  }

  public vaiParaPaginaUsuario() {
    this.router.navigate(['usuario/cadastrousuario']);
  }

  confirmeDeleteTodos(template: any) {
    for (var i = 0; i < this.usuarioFuncoes.filteredData.length; i++) {
      this.sigUsuarioService
        .deleteSigFuncaoTodas(this.usuarioFuncoes.filteredData[i])
        .subscribe(
          (response) => {
            template.hide();
            this.spinner.hide();
            this.getSigFuncoes(this.id);
          },
          (error) => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível excluir');
          }
        );
    }
    this.toastr.success('As Funcões foram removidas com sucesso');
    template.hide();
  }
}
