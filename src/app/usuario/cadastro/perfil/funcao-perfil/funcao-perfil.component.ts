import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  Funcao,
  FuncaoAutoComplete,
  Grupos,
  Modulo,
  SigFuncao,
} from 'src/app/sharedModels/usuarioModels/sigFuncao.model';
import {
  SigPerfilFuncao,
  SigPerfilFuncaoModel,
} from 'src/app/sharedModels/usuarioModels/sigPerfilFuncao.model';
import { SigPerfilUsuarioTable } from 'src/app/sharedModels/usuarioModels/sigPerfilUsuario.model';
import {
  SigUsuarioEdit,
  SigPerfilUsuario,
  SigFuncaoUsuario,
  SigGrupoUsuario,
  SigUsuario,
} from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SigFuncaoService } from 'src/app/sharedServices/usuarioServices/sigFuncao.service';
import { SigPerfilService } from 'src/app/sharedServices/usuarioServices/sigPerfil.service';
import { SigPerfilFuncaoService } from 'src/app/sharedServices/usuarioServices/sigPerfilFuncao.service';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';
import { SigUsuarioGrupoService } from 'src/app/sharedServices/usuarioServices/sigUsuarioGrupo.service';

@Component({
  selector: 'app-funcao-perfil',
  templateUrl: './funcao-perfil.component.html',
  styleUrls: ['./funcao-perfil.component.css'],
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
export class FuncaoPerfilComponent implements OnInit {
  tempFuncaoSelecionada: any = [];
  tempDeleteFuncaoSelecionada: any = [];

  registerForm!: FormGroup;
  perfilFuncaoForm!: FormGroup;
  grupoForm!: FormGroup;
  sigUsuario!: SigUsuarioEdit;
  sigUsuarioFuncao!: any;
  sigUsuarioPerfil!: any;
  sigUsuarioGrupos!: any;
  public id!: number;
  modoSalvar = 'post';
  sigUsuarioReset: any;
  sigPerfil: any;
  sigPerfilFuncao!: any;
  sigPerfilFuncoes: any = [];
  sigUsuarios: any = [];
  sigFuncao: any;
  sigPerfilUsuario!: SigPerfilUsuario;
  sigFuncaoUsuario!: SigFuncaoUsuario;
  sigGrupoUsuario!: SigGrupoUsuario;
  bodyDeletarEvento: string = '';
  deleteOpcao: string = '';
  public sigPerfilFuncoesTable = new MatTableDataSource<SigPerfilFuncaoModel>();
  public sigPerfilUsuariosTable =
    new MatTableDataSource<SigPerfilFuncaoModel>();

  ELEMENT_PERFIL: any = [];
  ELEMENT_FUNCAO: any = [];

  expandedElement!: Modulo | null;
  expandedElement2!: Grupos | null;

  modulos: Modulo[] = [];
  grupos: Grupos[] = [];
  funcoes: Funcao[] = [];

  @ViewChild(MatSort) sortFuncao!: MatSort;
  @ViewChild(MatPaginator) paginatorFuncao!: MatPaginator;
  @ViewChild(MatSort) sortUsuario!: MatSort;
  @ViewChild(MatPaginator) paginatorUsuario!: MatPaginator;

  color: ThemePalette = 'accent';

  flgpermissao = true;

  controlFuncao = new FormControl();
  selectFuncoes: FuncaoAutoComplete[] = [];
  funcoesFiltradas!: Observable<FuncaoAutoComplete[]>;

  // Table Columns
  columnsModule: string[] = ['moduleTitle', 'modulePermission'];
  columnsGroup: string[] = ['groupTitle', 'groupPermission'];
  columnsFunction: string[] = ['functionTitle', 'functionPermission'];

  constructor(
    private toastr: ToastrService,
    private sigUsuarioService: SigUsuarioService,
    private sigFuncaoService: SigFuncaoService,
    private sigPerfilFuncaoService: SigPerfilFuncaoService,
    private perfilService: SigPerfilService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private bottomSheet: MatBottomSheet
  ) {
    this.activatedRoute.params.subscribe((parametro: any) => {
      this.id! = parseInt(parametro.id);
    });

    this.sigPerfilFuncaoService.change.subscribe((value) => {
      if (value) {
        this.sigPerfilFuncoesTable.data = value;
      }
    });
  }

  ngOnInit(): void {
    this.getPerfilById(this.id);
    this.getFuncao();
    this.getFuncaoTratada();
    this.getProcessedModules();
  }

  // ------------------------------- INICIO CONTROLE DE FUNÇÕES ----------------------------------------------- //
  getProcessedModules() {
    this.sigFuncaoService.getSigFuncaoTratada().subscribe((response) => {
      this.modulos = response as Modulo[];
      this.spinner.hide();
    });
  }

  bulkyAction(permissao: string, funcoes: any) {
    for (var i = 0; i < funcoes.length; i++) {
      if (
        this.tempFuncaoSelecionada.some(
          (x: { codfuncao: any; }) => x.codfuncao == funcoes[i].codfuncao
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
          seqperfil: this.id,
          flgpermissao: permissao
        };
        this.tempFuncaoSelecionada.push(atualFuncao);
      }
    }
  }

  adicionaFuncoesClonadas() {
    for (var i = 0; i < this.sigPerfilFuncoes.length; i++) {
      this.adicionaPermissao(
        this.id,
        this.sigPerfilFuncoes[i].codfuncao,
        this.sigPerfilFuncoes[i].flgpermissao
      );
    }
  }

  adicionaPermissao(seqperfil: number, element: any, permissao: string) {
    if (this.tempFuncaoSelecionada.some((x: { codfuncao: any; }) => x.codfuncao == element)) {
      this.tempFuncaoSelecionada.splice(
        this.tempFuncaoSelecionada.findIndex(
          (item: any) => item.codfuncao === element
        ),
        1
      );
    }

    const atualFuncao = {
      seqperfil: this.id,
      codfuncao: element,
      flgpermissao: permissao
    };

    this.tempFuncaoSelecionada.push(atualFuncao);
  }

  isSelected(element: any, permissao: string) {
    var index = this.tempFuncaoSelecionada
      .map((x: { codfuncao: any; }) => x.codfuncao)
      .indexOf(element);
    if (index > -1) {
      return this.tempFuncaoSelecionada[index].flgpermissao == permissao;
    }
    return false;
  }

  isEmpty(element: any) {
    if (this.tempFuncaoSelecionada.some((x: { codfuncao: any; }) => x.codfuncao == element)) {
      return false;
    }
    return true;
  }
  // -------------------------------- FIM CONTROLE DE FUNÇÕES -------------------------------------------- //

  getFuncaoTratada() {
    this.sigFuncaoService.getSigFuncaoTratada().subscribe((response) => {
      this.modulos = response as unknown as Modulo[];
      this.spinner.hide();
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetFuncoes, {
      data: [this.modulos, this.id],
    });
  }

  ngAfterViewInit(): void {
    this.sigPerfilFuncoesTable.sort = this.sortFuncao;
    this.sigPerfilFuncoesTable.paginator = this.paginatorFuncao;
    this.sigPerfilUsuariosTable.sort = this.sortUsuario;
    this.sigPerfilUsuariosTable.paginator = this.paginatorUsuario;
  }

  public filtrarFuncao = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.sigPerfilFuncoesTable.filter = value;
    }
  };

  public filtrarUsuario = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.sigPerfilUsuariosTable.filter = value;
    }
  };

  exibeFuncao(funcao: FuncaoAutoComplete): string {
    return funcao && funcao.descrfuncao ? funcao.descrfuncao : '';
  }

  private _filtraFuncao(descrfuncao: string): FuncaoAutoComplete[] {
    const valorFiltradoFuncao = descrfuncao.toLowerCase();
    return this.selectFuncoes.filter((funcao) =>
      funcao.descrfuncao.toLowerCase().includes(valorFiltradoFuncao)
    );
  }

  getFuncao() {
    this.sigFuncaoService.getSigFuncao().subscribe((response) => {
      this.selectFuncoes = response as FuncaoAutoComplete[];

      this.funcoesFiltradas = this.controlFuncao.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : value?.name;
          return name
            ? this._filtraFuncao(name as string)
            : this.selectFuncoes.slice();
        })
      );
    });
  }

  getPerfilFuncao(idperfil: number) {
    this.spinner.show();
    this.sigPerfilFuncaoService
      .getSigPerfilFuncaoById(idperfil)
      .subscribe((response) => {
        this.sigPerfilFuncoes = response as SigPerfilFuncaoModel[];
        this.sigPerfilFuncoesTable.data = response as SigPerfilFuncaoModel[];
        this.spinner.hide();
        this.adicionaFuncoesClonadas();
      });
  }
  openModal(sigUsuarioTemplate: any): void {
    sigUsuarioTemplate.show(sigUsuarioTemplate, {
      backdropClass: 'light-blue-backdrop',
    });
  }

  public getPerfilById(id: number) {
    this.spinner.show();
    this.perfilService.getSigPerfilsById(id).subscribe((response) => {
      this.sigPerfil = response;
      this.getPerfilFuncao(id);
      this.spinner.hide();
    });
  }

  public deletePerfilFuncao(
    funcaoUsuario: SigPerfilFuncaoModel,
    template: any
  ) {
    this.openModal(template);
    this.sigPerfilFuncao = funcaoUsuario;
    this.deleteOpcao = 'perfilFuncao';
  }

  public confirmeDelete(template: any) {
    this.spinner.show();
    if (this.deleteOpcao == 'perfilFuncao') {
      this.sigPerfilFuncaoService
        .deleteSigPerfilFuncao(
          this.sigPerfilFuncao.seqperfil,
          this.sigPerfilFuncao.codfuncao
        )
        .subscribe(
          () => {
            this.toastr.success('A Funcão foi removida com sucesso');
            template.hide();
            this.getPerfilFuncao(this.id);
            this.spinner.hide();
          },
          () => {
            this.spinner.hide();
            this.toastr.warning('Não foi possível excluir');
          }
        );
    }
  }

  salvarPerfilFuncao() {

    console.log(this.tempFuncaoSelecionada);

    for (var i = 0; i < this.tempFuncaoSelecionada.length; i++) {
      if (this.tempFuncaoSelecionada[i].flgpermissao != '') {
        var funcaoPerfilTemp = Object.assign({
          seqperfil: this.id,
          codfuncao: this.tempFuncaoSelecionada[i].codfuncao,
          flgpermissao: this.tempFuncaoSelecionada[i].flgpermissao,
        });
      } else {
        this.sigPerfilFuncaoService
          .deleteSigPerfilFuncao(
            this.id,
            this.tempFuncaoSelecionada[i].codfuncao
          ).subscribe(
            () => {
              this.toastr.success('A Funcão foi removida com sucesso');
              this.spinner.hide();
            },
            () => {
              this.spinner.hide();
              this.toastr.warning('Não foi possível excluir');
            }
          );
      }
    }

    if (
      funcaoPerfilTemp.codfuncao != null &&
      funcaoPerfilTemp.seqperfil != null &&
      funcaoPerfilTemp.flgpermissao != null
    ) {
      this.sigPerfilFuncaoService
        .saveSigPerfilFuncao(this.tempFuncaoSelecionada)
        .subscribe(
          () => {
            this.toastr.success('Permissão foi salva');
          },
          () => {
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

  public getInfoUsuario(sequsuario: any) {
    this.router.navigate(['usuario/editar', sequsuario]);
  }
}

@Component({
  selector: 'bottom-sheet-funcoes',
  templateUrl: 'bottom-sheet-funcoes.html',
  styleUrls: ['bottom-sheet-funcoes.css'],
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
export class BottomSheetFuncoes {
  displayedColumns: string[] = ['modulo'];
  dataSource = this.data;
  selecionado = false;
  colunasExibidasModulo = ['modulo'];
  colunasExibidasGrupo = ['grupo'];
  colunasExibidasModuloEspandidas = [...this.colunasExibidasModulo, 'expand'];
  colunasExibidasGrupoEspandidas = [...this.colunasExibidasGrupo, 'expand'];
  expandedElement!: Modulo | null;
  expandedElement2!: Grupos | null;
  sigPerfilFuncoes: any = [];
  id!: number;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetFuncoes>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.dataSource = this.data[0];
    this.id = this.data[1];
  }
}
