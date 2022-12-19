import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { EscalaMotorista } from 'src/app/sharedModels/portalMotorista/escalaMotorista.model';


@Injectable()

export class PortalMotoristaService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public getEscalaMotorista(seqtripulante: string){
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.get(AppConstants.basePortalMotoristas+`/${seqtripulante}`, options);
  }

  public getMensagem(seqtripulante: string){
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.get(AppConstants.baseMensagens+`/${seqtripulante}`, options);
  }

  public confirmaEscala(escala: EscalaMotorista) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.get(AppConstants.baseVisualizaJornadas+`/${escala.secjornada}`, options);
  }
}
