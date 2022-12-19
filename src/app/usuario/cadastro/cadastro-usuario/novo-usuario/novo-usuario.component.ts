import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Grupos } from 'src/app/sharedModels/menu-new.model';
import {
  Funcao,
  FuncaoAutoComplete,
  Modulo,
} from 'src/app/sharedModels/usuarioModels/sigFuncao.model';
import { SigPerfilModel } from 'src/app/sharedModels/usuarioModels/sigPerfil.model';
import { SigPerfilFuncao } from 'src/app/sharedModels/usuarioModels/sigPerfilFuncao.model';
import {
  SigUsuario,
  SigUsuarioEdit,
  SigFuncaoUsuario,
} from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SelectService } from 'src/app/sharedServices/selectServices/select.service';
import { SigFuncaoService } from 'src/app/sharedServices/usuarioServices/sigFuncao.service';
import { SigPerfilService } from 'src/app/sharedServices/usuarioServices/sigPerfil.service';
import { SigPerfilFuncaoService } from 'src/app/sharedServices/usuarioServices/sigPerfilFuncao.service';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
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
export class NovoUsuarioComponent implements OnInit {
  registerForm!: FormGroup;
  checkForm!: FormGroup;
  sigUsuario!: SigUsuarioEdit;
  sigUsuarioFuncao!: any;
  sigUsuarioPerfil!: any;

  // Selects
  selectPerfis: SigPerfilModel[] = [];
  selectRegionais: any = [];
  selectCargos: any = [];
  selectGrupos: any = [];
  selectNops: any = [];

  // Others
  public id!: number;

  // Controls
  controlFuncao = new FormControl(); //so serve pra autocomplete?
  controlPerfil = new FormControl(); //so serve pra autocomplete?
  controlUsuario = new FormControl('', [Validators.required]);
  controlNome = new FormControl('', [Validators.required]);

  selectFuncoesAutoComplete: FuncaoAutoComplete[] = [];
  modulos: Modulo[] = [];
  grupos: Grupos[] = [];
  funcoes: Funcao[] = [];
  funcoesFiltradas!: Observable<FuncaoAutoComplete[]>;
  perfisFiltrados!: Observable<SigPerfilModel[]>;
  selecaoPerfil = new SelectionModel<SigPerfilModel>(true, []);
  selecaoFuncao = new SelectionModel<FuncaoAutoComplete>(true, []);
  selecionado = 'false';
  selectedRegional: String = '';
  expandedElement!: Modulo | null;
  expandedElement2!: Grupos | null;
  sigPerfilFuncoes: any = [];
  public sigPerfilFuncoesTable = new MatTableDataSource<SigUsuario>();
  ELEMENT_FUNCAO: any = [];

  // Funcoes selecionadas
  tempFuncaoSelecionada: SigFuncaoUsuario[] = [];

  // DataSources
  profileDataSource = new MatTableDataSource<SigPerfilModel>(this.selectPerfis);
  dataSourceFuncao = new MatTableDataSource<FuncaoAutoComplete>(
    this.selectFuncoesAutoComplete
  );

  // Table Columns
  columnsProfile: string[] = ['profileSelection', 'profileDescription'];
  columnsModule: string[] = ['moduleTitle', 'modulePermission'];
  columnsGroup: string[] = ['groupTitle', 'groupPermission'];
  columnsFunction: string[] = ['functionTitle', 'functionPermission'];

  // Array of nop
  nops: any[] = [];

  // Change Regional
  changeRegional(id: number) {
    this.nops = this.selectRegionais.find(
      (item: { seqregional: number }) => item.seqregional === id
    ).nops;
  }

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

  constructor(
    private selectService: SelectService,
    private sigUsuarioService: SigUsuarioService,
    private sigPerfilFuncaoService: SigPerfilFuncaoService,
    private fb: FormBuilder,
    private perfilService: SigPerfilService,
    private funcaoService: SigFuncaoService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validacao();
    this.getRegionalNop();
    this.getCargo();
    this.getGrupo();
    this.getNop();
    this.getFuncaoAutoComplete();
    this.getPerfilAutoComplete();
    this.getProcessedModules();
  }

  // SELECT REGIONAL
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

  // SELECT NOP
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

  // SELECT CARGO
  selectCargo = '';
  selectCargosObj: any = {};
  onChangeCargo = () => {
    this.selectCargosObj = this.selectCargos.find(
      (c: any) => c.make == this.selectCargo
    );
  };
  getCargo() {
    this.selectService.getCargo().subscribe((response) => {
      this.selectCargos = response;
    });
  }

  // SELECT GRUPO
  selectGrupo = '';
  selectGruposObj: any = {};
  onChangeGrupo = () => {
    this.selectGruposObj = this.selectGrupos.find(
      (c: any) => c.make == this.selectGrupo
    );
  };
  getGrupo() {
    this.selectService.getGrupo().subscribe((response) => {
      this.selectGrupos = response;
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
      } else {
        usuarioTemp.seqnop = usuarioTemp.seqnop.seqnop;
      }
      if (usuarioTemp.seqregional == '') {
        usuarioTemp.seqregional = null;
      } else {
        usuarioTemp.seqregional = usuarioTemp.seqregional.seqregional;
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

  getProcessedModules() {
    this.funcaoService.getSigFuncaoTratada().subscribe((response) => {
      this.modulos = response as Modulo[];
      this.spinner.hide();
    });
  }

  validacao() {
    this.registerForm = this.fb.group({
      usuario: ['', Validators.required], //
      nome: ['', Validators.required], //
      seqgrupo: [''], //
      seqregional: [''], //
      seqnop: [''], //
      email: [''], //
      cpf: [''], //
      matricula: [''], //
      descrcargo: [''], //
    });
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

  // Autor: Renan
  // Descrição: Função que adiciona permissões
  getPerfilFuncao(idperfil: number) {
    this.spinner.show();
    this.sigPerfilFuncaoService
      .getSigPerfilFuncaoById(idperfil)
      .subscribe((response) => {
        this.sigPerfilFuncoes = response as SigPerfilFuncao[];
        this.sigPerfilFuncoesTable.data = response as SigPerfilFuncao[];
        this.spinner.hide();
      });
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
}
