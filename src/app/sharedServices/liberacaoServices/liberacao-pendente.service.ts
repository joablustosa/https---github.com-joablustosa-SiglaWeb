import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/AppConstants';
import { LiberacaoPendente } from 'src/app/sharedModels/liberacaoModels/liberacaoModels/liberacaoPendente.model';
import { PesquisaLiberacao } from 'src/app/sharedModels/liberacaoModels/pesquisaModels/pesquisa-liberacao.model';

@Injectable({
  providedIn: 'root'
})
export class LiberacaoPendenteService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
    ){}

  // public deleteSimulador(id: number){
  //   return this.http.delete(AppConstants.baseSimulador + `/${id}`);
  // }

  // public getSimuladorsById(id: number): Observable<LiberacaoPendente>{
  //   return this.http.get<LiberacaoPendente>(AppConstants.baseSimulador + `/${id}`);
  // }

  // public getByIdSimulador(id: number): Observable<LiberacaoPendente>{
  //   return this.http.get<LiberacaoPendente>(AppConstants.basePerguntas + `/?IdNivel=${id}`);
  // }

  // public getSimulador(){
  //   return this.http.get(AppConstants.baseSimulador);
  // }

  public getliberacao(pesquisa: any): Observable<LiberacaoPendente>{
    this.spinner.show();
    let mensagem: string = ''
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseLiberacoesPendentes, JSON.stringify(pesquisa), options);
  }

  // public saveSimulador(simulador: Simulador) {
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.post(AppConstants.baseSimulador, simulador, options);
  // }

  // public putSimulador(simulador: Simulador) {
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.put(AppConstants.baseSimulador, simulador, options);
  // }
}

