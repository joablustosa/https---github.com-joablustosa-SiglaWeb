import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ngxCsv } from 'ngx-csv';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FuncaoAutoComplete } from 'src/app/sharedModels/usuarioModels/sigFuncao.model';
import { SigRelatorioLogUsuario } from 'src/app/sharedModels/usuarioModels/sigRelatoriosUsuarios.model';
import { SigUsuarioEdit } from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { RelatorioUsuarioService } from 'src/app/sharedServices/usuarioServices/relatorioUsuario.service';
import { SigFuncaoService } from 'src/app/sharedServices/usuarioServices/sigFuncao.service';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';

@Component({
  selector: 'app-usuario-funcao',
  templateUrl: './usuario-funcao.component.html',
  styleUrls: ['./usuario-funcao.component.css'],
})
export class UsuarioFuncaoComponent implements OnInit {
  registerForm!: FormGroup;

  // Filters
  usuariosFiltrados!: Observable<SigUsuarioEdit[]>;
  funcoesFiltradas!: Observable<FuncaoAutoComplete[]>;

  // Selects
  selectFuncoes: FuncaoAutoComplete[] = [];
  selectUsuarios: SigUsuarioEdit[] = [];

  // Controls
  controlFuncao = new FormControl();
  controlUsuario = new FormControl();

  // Retorna as funções de um usuaário
  public usuarioFuncoes = new MatTableDataSource<SigRelatorioLogUsuario>();

  // Mat-Table Columns
  nomeColunas = [
    'usuario',
    'descricao_funcao',
    'permissao',
    'contador_acessos',
    'nomecomputador',
    'ultimo_login',
  ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private funcaoService: SigFuncaoService,
    private usuarioService: SigUsuarioService,
    private relatorioUsuarioService: RelatorioUsuarioService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private localeService: BsLocaleService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.usuarioFuncoes.sortingDataAccessor = (data: any, sortHeaderId) =>
      data[sortHeaderId];

    this.validacao();
    this.getUsuarioAutoComplete();
    this.getFuncaoAutoComplete();
  }

  ngAfterViewInit() {
    this.usuarioFuncoes.paginator = this.paginator;
    this.usuarioFuncoes.sort = this.sort;
  }

  getUsuarioAutoComplete() {
    this.spinner.show();
    this.usuarioService.getSigUsuario().subscribe((response) => {
      this.selectUsuarios = response as SigUsuarioEdit[];
      this.spinner.hide();
      this.usuariosFiltrados = this.controlUsuario.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const usuario = typeof value === 'string' ? value : value?.usuario;
          return usuario
            ? this._filtraUsuario(usuario as string)
            : this.selectUsuarios.slice();
        })
      );
    });
  }

  public filtrar = (target: any) => {
    if (target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      const value = elemento.value.trim().toLocaleLowerCase();
      this.usuarioFuncoes.filter = value;
    }
  };

  exibeUsuario(usuario: SigUsuarioEdit): string {
    return usuario && usuario.usuario ? usuario.usuario : '';
  }

  private _filtraUsuario(usuario: string): SigUsuarioEdit[] {
    const valorFiltradoUsuario = usuario.toLowerCase();
    return this.selectUsuarios.filter((usuario) =>
      usuario.usuario.toLowerCase().includes(valorFiltradoUsuario)
    );
  }

  exibeFuncao(funcao: FuncaoAutoComplete): string {
    return funcao && funcao.descrfuncao ? funcao.descrfuncao : '';
  }

  private _filtraFuncao(funcao: string): FuncaoAutoComplete[] {
    const valorFiltradoFuncao = funcao.toLowerCase();
    return this.selectFuncoes.filter((funcao) =>
      funcao.descrfuncao.toLowerCase().includes(valorFiltradoFuncao)
    );
  }

  resetForms() {
    this.controlFuncao.reset();
    this.controlUsuario.reset();
  }

  getFuncaoAutoComplete() {
    this.spinner.show();
    this.funcaoService.getSigFuncao().subscribe((response) => {
      this.selectFuncoes = response as FuncaoAutoComplete[];
      this.spinner.hide();
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

  public consultarRelatorioFuncaoUsuario() {
    if (this.controlUsuario.valid) {
      this.spinner.show();

      var flgativoTemp = Object.assign({}, this.registerForm.value);
      var sequsuarioTemp = Object.assign({}, this.controlUsuario.value);
      var codfuncaoTemp = Object.assign({}, this.controlFuncao.value);

      var pesquisaTemp = Object.assign({
        sequsuario: sequsuarioTemp.sequsuario,
        codfuncao: codfuncaoTemp.codfuncao,
        flgativo: this.convertFlgAtivo(flgativoTemp.flgativo),
      });

      this.relatorioUsuarioService
        .relatorioUsuarioFuncao(
          pesquisaTemp.sequsuario,
          pesquisaTemp.codfuncao,
          pesquisaTemp.flgativo
        )
        .subscribe((response) => {
          this.usuarioFuncoes.data = response as SigRelatorioLogUsuario[];
          this.spinner.hide();
        });
    }
    this.resetForms();
    this.spinner.hide();
  }

  convertFlgAtivo(flgativo: boolean) {
    if (flgativo == true) {
      return 'S';
    } else {
      return 'N';
    }
  }

  private validacao() {
    this.registerForm = this.fb.group({
      flgativo: [''],
    });
  }

  downloadCsv() {
    this.spinner.show();
    var opcoes = {
      fieldSeparator: ',',
      //quoteStrings: '""',
      decimalseparator: '.',
      showLabels: true,
      // title: 'Relatório Avaria Celular',
      useBom: true,
      // noDownload: true,
      headers: [
        'usuario',
        'descricao_funcao',
        'permissao',
        'contador_acessos',
        'nomecomputador',
        'ultimo_login',
      ],
    };
    this.spinner.hide();
    new ngxCsv(this.usuarioFuncoes.data, 'relatorio_log_usuario', opcoes);
  }

  downloadPdf() {
    this.spinner.show();

    var doc = new jsPDF();

    autoTable(doc, {
      html: '#tabelaLog',
      styles: {
        font: 'helvetica',
        fontSize: 9,
      },
      margin: {
        top: 25,
      },
      didDrawPage: function (data) {
        // Header
        doc.setFontSize(16);
        doc.setTextColor(40);
        doc.text(
          'Relatório de Funções Associadas a Usuários',
          data.settings.margin.left,
          18
        );

        // Footer
        var str = 'Página ' + doc.getNumberOfPages();
        doc.setFontSize(10);

        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
    });

    this.spinner.hide();
    doc.save('relatorio_log_usuario.pdf');
  }
}
