import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/AppConstants';
import { LiberacaoPendente } from 'src/app/sharedModels/liberacaoModels/liberacaoModels/liberacaoPendente.model';
import { RelatorioAlteracaoVeiculo } from 'src/app/sharedModels/liberacaoModels/relarorioModels/relatorio-alteracao-veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class RelatorioAlteracaoVeiculoService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
    ){}

  public getAlteracaosById(id: number): Observable<LiberacaoPendente>{
    return this.http.get<LiberacaoPendente>(AppConstants.baseRelatorioAlteracaoVeiculo + `/${id}`);
  }

  public getAlteracao(pesquisa: any): Observable<RelatorioAlteracaoVeiculo>{
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
    return this.http.post(AppConstants.baseRelatorioAlteracaoVeiculo, JSON.stringify(pesquisa), options);
  }
}

