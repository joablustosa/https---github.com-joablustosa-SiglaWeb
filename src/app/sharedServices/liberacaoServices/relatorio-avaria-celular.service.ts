import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/AppConstants';
import { PesquisaRelatorioRegistroAvariaCelular } from 'src/app/sharedModels/liberacaoModels/pesquisaModels/pesquisa-relatorio-registro-avaria-celular.model';
import { RelatorioRegistroAvariaCelular } from 'src/app/sharedModels/liberacaoModels/relarorioModels/relatorio-registro-avaria-celular.model';

@Injectable({
  providedIn: 'root'
})
export class RelatorioAvariaCelularService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
    ){}

  public getAvariaCelular(pesquisa: PesquisaRelatorioRegistroAvariaCelular): Observable<RelatorioRegistroAvariaCelular>{
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseRelatorioAvariaCelular, JSON.stringify(pesquisa), options);
  }
}

