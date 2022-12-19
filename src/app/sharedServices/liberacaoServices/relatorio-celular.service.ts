import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/AppConstants';
import { RelatorioCelular } from 'src/app/sharedModels/liberacaoModels/relarorioModels/relatorio-celular.model';

@Injectable({
  providedIn: 'root'
})
export class RelatorioCelularService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
    ){}

  public getCelular(pesquisa: any): Observable<RelatorioCelular>{
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
    return this.http.post(AppConstants.baseRelatorioCelular, JSON.stringify(pesquisa), options);
  }
}

