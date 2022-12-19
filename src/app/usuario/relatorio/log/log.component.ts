import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ngxCsv } from 'ngx-csv';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FuncaoAutoComplete } from 'src/app/sharedModels/usuarioModels/sigFuncao.model';
import { SigRelatorioLogUsuario } from 'src/app/sharedModels/usuarioModels/sigRelatoriosUsuarios.model';
import {
  SigUsuario,
  SigUsuarioEdit,
} from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SelectService } from 'src/app/sharedServices/selectServices/select.service';
import { RelatorioUsuarioService } from 'src/app/sharedServices/usuarioServices/relatorioUsuario.service';
import { SigFuncaoService } from 'src/app/sharedServices/usuarioServices/sigFuncao.service';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogUsuarioComponent implements OnInit {
  // Form controls
  registerForm!: FormGroup;
  controlUsuario = new FormControl();
  controlFuncoes = new FormControl();
  // Selects
  selectFuncoes: FuncaoAutoComplete[] = [];
  selectUsuarios: SigUsuarioEdit[] = [];
  selectRegionais: any = [];
  selectNops: any = [];
  selectNop: any;
  // Filtrados
  usuariosFiltrados!: Observable<SigUsuarioEdit[]>;
  funcoesFiltradas!: Observable<FuncaoAutoComplete[]>;

  get f(): any {
    return this.registerForm.controls;
  }

  nomeColunas = [
    'dtacesso',
    'modulo',
    'descrfuncao',
    'usuario',
    'nomecomputador',
    'versaoatual',
  ];

  public logs = new MatTableDataSource<SigRelatorioLogUsuario>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private funcaoService: SigFuncaoService,
    private usuarioService: SigUsuarioService,
    private relatorioUsuarioService: RelatorioUsuarioService,
    private modalService: BsModalService,
    private selectService: SelectService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private config: NgSelectConfig,
    private localeService: BsLocaleService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.logs.sortingDataAccessor = (data: any, sortHeaderId) =>
      data[sortHeaderId];

    this.validacao();
    this.getUsuarioAutoComplete();
    this.getFuncaoAutoComplete();
  }

  ngAfterViewInit() {
    this.logs.paginator = this.paginator;
    this.logs.sort = this.sort;
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
      this.logs.filter = value;
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

  resetForm() {
    this.registerForm.reset();
    this.controlFuncoes.reset();
    this.controlUsuario.reset();
  }

  getFuncaoAutoComplete() {
    this.funcaoService.getSigFuncao().subscribe((response) => {
      this.selectFuncoes = response as FuncaoAutoComplete[];
      this.spinner.hide();
      this.funcoesFiltradas = this.controlFuncoes.valueChanges.pipe(
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

  public consultarLogUsuario() {
      this.spinner.show();

      var sequsuarioTemp = Object.assign({}, this.controlUsuario.value);
      var codfuncaoTemp = Object.assign({}, this.controlFuncoes.value);

      var pesquisaTemp = Object.assign(
        {
          sequsuario: sequsuarioTemp.sequsuario,
          codfuncao: codfuncaoTemp.codfuncao,
        },
        this.registerForm.value
      );

      this.relatorioUsuarioService
        .relatorioLogUsuario(
          pesquisaTemp.dtoperini,
          pesquisaTemp.dtoperfim,
          pesquisaTemp.sequsuario,
          pesquisaTemp.codfuncao
        )
        .subscribe((response) => {
          this.logs.data = response as SigRelatorioLogUsuario[];
          this.spinner.hide();
        });

    this.resetForm();
  }

  private validacao() {
    this.registerForm = this.fb.group({
      dtoperini: ['', Validators.required],
      dtoperfim: ['', Validators.required],
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
        'dataAcesso',
        'modulo',
        'descricaoFuncao',
        'usuario',
        'computador',
        'versao',
      ],
    };
    this.spinner.hide();
    new ngxCsv(this.logs.data, 'relatorio_log_usuario', opcoes);
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
          'Relatório de Log de Acesso ao Sistema',
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
