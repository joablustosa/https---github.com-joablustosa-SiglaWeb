import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from "rxjs";
import { AppConstants } from "src/app/AppConstants";

@Injectable()

export class RelatorioUsuarioService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  public getAvariaCelular(pesquisa: any) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.get(AppConstants.baseRelatorioLogUsuario + `?dtinicial=${pesquisa.dtinicial}&dtfinal=${pesquisa.dtfinal}&sequsuario=${pesquisa.sequsuario}&seqfuncao=${pesquisa.seqfuncao}`);
  }

  public relatorioLogUsuario(dtinicial: string, dtfinal: string, sequsuario: string, codfuncao: string) {
    let token = localStorage.getItem("tokenSigla");
    let params = new HttpParams().set("dtinicial", dtinicial).set("dtfinal", dtfinal).set("sequsuario", sequsuario).set("codfuncao", codfuncao);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
      params
    }
    return this.http.get(AppConstants.baseRelatorioLogUsuario, options);
  }

  public relatorioUsuarioFuncao(sequsuario: number, codfuncao: string, flgativo: string) {
    let token = localStorage.getItem("tokenSigla");
    let params = new HttpParams().set("sequsuario", sequsuario).set("codfuncao", codfuncao).set("flgativo", flgativo);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
      params
    }
    return this.http.get(AppConstants.baseRelatorioUsuarioFuncao, options);
  }

  public relatorioUsuarioPerfil(sequsuario: number, seqperfil: number, flgativo: string) {
    let token = localStorage.getItem("tokenSigla");
    let params = new HttpParams().set("sequsuario", sequsuario).set("seqperfil", seqperfil).set("flgativo", flgativo);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
      params
    }
    return this.http.get(AppConstants.baseRelatorioUsuarioPerfil, options);
  }


}