import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {
  Funcao,
  FuncaoAutoComplete,
  Grupos,
  Modulo,
} from 'src/app/sharedModels/usuarioModels/sigFuncao.model';
import { SigPerfilModel } from 'src/app/sharedModels/usuarioModels/sigPerfil.model';
import {
  SigUsuarioEdit,
  SigPerfilUsuario,
  SigFuncaoUsuario,
  SigGrupoUsuario,
  SigUsuarioFuncao,
  SigUsuario,
  SigUsuarioPerfil,
} from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SelectService } from 'src/app/sharedServices/selectServices/select.service';
import { SigFuncaoService } from 'src/app/sharedServices/usuarioServices/sigFuncao.service';
import { SigPerfilService } from 'src/app/sharedServices/usuarioServices/sigPerfil.service';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';
import { SigUsuarioGrupoService } from 'src/app/sharedServices/usuarioServices/sigUsuarioGrupo.service';
import { SelectionModel } from '@angular/cdk/collections';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-clona-usuario',
  templateUrl: './clona-usuario.component.html',
  styleUrls: ['./clona-usuario.component.css'],
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
export class ClonaUsuarioComponent implements OnInit {
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

  sigPerfilUsuarios: any[] = [];
  sigPerfilUsuario!: SigPerfilUsuario;
  sigFuncaoUsuario!: SigFuncaoUsuario;
  sigGrupoUsuario!: SigGrupoUsuario;

  expandedElement!: Modulo | null;
  expandedElement2!: Grupos | null;

  modulos: Modulo[] = [];
  grupos: Grupos[] = [];
  funcoes: Funcao[] = [];

  bodyDeletarEvento: string = '';
  deleteOpcao: string = '';
  flgAltera = true;
  sigPerfilFuncao!: SigFuncaoUsuario;

  // Table Columns
  columnsProfile: string[] = ['profileSelection', 'profileDescription'];
  columnsModule: string[] = ['moduleTitle', 'modulePermission'];
  columnsGroup: string[] = ['groupTitle', 'groupPermission'];
  columnsFunction: string[] = ['functionTitle', 'functionPermission'];

  controlFuncao = new FormControl();
  controlPerfil = new FormControl();

  funcoesFiltradas!: Observable<FuncaoAutoComplete[]>;
  perfisFiltrados!: Observable<SigPerfilModel[]>;

  // Selects
  selectNops: any = [];
  selectRegionais: any = [];
  selectGrupos: any = [];
  selectFuncoes: any[] = [];
  selectPerfis: SigPerfilModel[] = [];
  selectFuncoesAutoComplete: FuncaoAutoComplete[] = [];

  // Funcoes selecionadas
  tempFuncaoSelecionada: SigFuncaoUsuario[] = [];

  ELEMENT_PERFIL: any = [];
  ELEMENT_FUNCAO: any = [];

  selecaoPerfil = new SelectionModel<SigPerfilModel>(true, []);
  selecaoFuncao = new SelectionModel<FuncaoAutoComplete>(true, []);

  selectedRegional: String = '';

  public sigPerfilFuncoesTable = new MatTableDataSource<SigUsuarioFuncao>();
  public sigPerfilTable = new MatTableDataSource<SigPerfilModel>();

  @ViewChild(MatSort) sortFuncao!: MatSort;
  @ViewChild(MatPaginator) paginatorFuncao!: MatPaginator;
  @ViewChild(MatSort) sortPerfil!: MatSort;
  @ViewChild(MatPaginator) paginatorPerfil!: MatPaginator;

  color: ThemePalette = 'accent';
  flgpermissao = true;

  // Array of nop
  nops: any[] = [];

  getProcessedModules() {
    this.funcaoService.getSigFuncaoTratada().subscribe((response) => {
      this.modulos = response as Modulo[];
      this.spinner.hide();
    });
  }

  // Change Regional
  changeRegional(id: number) {
    this.nops = this.selectRegionais.find(
      (item: { seqregional: number }) => item.seqregional === id
    ).nops;
  }

  getGrupo() {
    this.grupoService.getSigUsuarioGrupo().subscribe((response) => {
      this.selectGrupos = response;
    });
  }

  getFuncaoAutoComplete() {
    this.funcaoService.getSigFuncao().subscribe((response) => {
      this.selectFuncoesAutoComplete = response as FuncaoAutoComplete[];
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
    this.perfilService.getSigPerfil().subscribe((response) => {
      this.selectPerfis = response as SigPerfilModel[];
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

  constructor(
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
    this.sigPerfilFuncoesTable.sort = this.sortFuncao;
    this.sigPerfilFuncoesTable.paginator = this.paginatorFuncao;
    this.sigPerfilTable.sort = this.sortPerfil;
    this.sigPerfilTable.paginator = this.paginatorPerfil;
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

    console.log(this.tempFuncaoSelecionada);

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

  getPerfilByIdUsuario(idUsuario: number) {
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
      this.sigPerfilFuncoesTable.filter = value;
    }
  };

  public filtrarPerfil = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.sigPerfilTable.filter = value;
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

  public getSigUsuarios(id: number) {
    this.spinner.show();
    this.sigUsuarioService.getSigUsuariosById(id).subscribe((response) => {
      this.sigUsuario = response as SigUsuarioEdit;
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
        this.deleteOpcao = '';
        this.spinner.hide();
        this.adicionaFuncesClonadas();
      });
  }

  public getSigPerfis(id: number) {
    this.spinner.show();
    this.sigUsuarioService.getPerfisSigUsuarioById(id).subscribe((response) => {
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

  public vaiParaPaginaUsuario() {
    this.router.navigate(['usuario/cadastrousuario']);
  }
}
