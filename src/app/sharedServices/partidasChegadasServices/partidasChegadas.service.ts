import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/AppConstants';
import { EscalaMotorista } from 'src/app/sharedModels/portalMotorista/escalaMotorista.model';

@Injectable()
export class PartidasChegadasService {
  constructor(private http: HttpClient, private router: Router) {}

  public getPartida(sequsuarioaerop: string) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers,
    };
    return this.http.get(
      AppConstants.basePartidas + `?sequsuarioaerop=${sequsuarioaerop}`,
      options
    );
  }

  public getChegada(sequsuarioaerop: string) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers,
    };
    return this.http.get(
      AppConstants.baseChegadas + `?sequsuarioaerop=${sequsuarioaerop}`,
      options
    );
  }
}
