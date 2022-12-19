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
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ngxCsv } from 'ngx-csv';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SigPerfilModel } from 'src/app/sharedModels/usuarioModels/sigPerfil.model';
import { SigRelatorioLogUsuario } from 'src/app/sharedModels/usuarioModels/sigRelatoriosUsuarios.model';
import { SigUsuarioEdit } from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { SelectService } from 'src/app/sharedServices/selectServices/select.service';
import { RelatorioUsuarioService } from 'src/app/sharedServices/usuarioServices/relatorioUsuario.service';
import { SigPerfilService } from 'src/app/sharedServices/usuarioServices/sigPerfil.service';
import { SigUsuarioService } from 'src/app/sharedServices/usuarioServices/sigUsuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css'],
})
export class UsuarioPerfilComponent implements OnInit {
  registerForm!: FormGroup;

  // Filters
  usuariosFiltrados!: Observable<SigUsuarioEdit[]>;
  perfisFiltrados!: Observable<SigPerfilModel[]>;

  // Selects
  selectUsuarios: SigUsuarioEdit[] = [];
  selectPerfis: SigPerfilModel[] = [];

  // Controls
  controlUsuario = new FormControl();
  controlPerfil = new FormControl();

  // Columns namnes
  nomeColunas = ['usuario', 'nome', 'descrperfil', 'ultlogin'];

  // Return profiles
  public usuarioPerfis = new MatTableDataSource<SigRelatorioLogUsuario>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private perfilService: SigPerfilService,
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
    this.usuarioPerfis.sortingDataAccessor = (data: any, sortHeaderId) =>
      data[sortHeaderId];

    this.validacao();
    this.getUsuarioAutoComplete();
    this.getPerfilAutoComplete();
  }

  ngAfterViewInit() {
    this.usuarioPerfis.paginator = this.paginator;
    this.usuarioPerfis.sort = this.sort;
  }

  getUsuarioAutoComplete() {
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
      this.usuarioPerfis.filter = value;
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

  exibePerfil(perfil: SigPerfilModel): string {
    return perfil && perfil.descrperfil ? perfil.descrperfil : '';
  }

  private _filtraPerfil(perfil: string): SigPerfilModel[] {
    const valorFiltradoPerfil = perfil.toLowerCase();
    return this.selectPerfis.filter((perfil) =>
      perfil.descrperfil.toLowerCase().includes(valorFiltradoPerfil)
    );
  }

  resetForms() {
    this.controlPerfil.reset();
    this.controlUsuario.reset();
  }

  openModal(avariaCelularTemplate: any): void {
    this.registerForm.reset();
    avariaCelularTemplate.show(avariaCelularTemplate);
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

  public consultarRelatorioPerfilUsuario() {
    this.spinner.show();

    if (this.controlUsuario.valid) {
      this.spinner.show();

      var flgativoTemp = Object.assign({}, this.registerForm.value);
      var sequsuarioTemp = Object.assign({}, this.controlUsuario.value);
      var seqperfilTemp = Object.assign({}, this.controlPerfil.value);

      var pesquisaTemp = Object.assign({
        sequsuario: sequsuarioTemp.sequsuario,
        seqperfil: seqperfilTemp.seqperfil,
        flgativo: this.convertFlgAtivo(flgativoTemp.flgativo),
      });

      this.relatorioUsuarioService
        .relatorioUsuarioPerfil(
          pesquisaTemp.sequsuario,
          pesquisaTemp.seqperfil,
          pesquisaTemp.flgativo
        )
        .subscribe((response) => {
          this.usuarioPerfis.data = response as SigRelatorioLogUsuario[];
          this.spinner.hide();
        });
    }

    this.resetForms();
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
      headers: ['nome', 'descrperfil', 'usuario', 'ultlogin'],
    };
    this.spinner.hide();
    new ngxCsv(this.usuarioPerfis.data, 'relatorio_log_usuario', opcoes);
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
          'Relatório de Perfis Associados a Usuários',
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
