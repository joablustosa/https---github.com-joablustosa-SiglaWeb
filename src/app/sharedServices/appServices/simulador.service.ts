import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AppConstants } from 'src/app/AppConstants';
import { SimuladorPergunta } from 'src/app/sharedModels/appModels/simuladorPergunta.model';
import { Simulador } from 'src/app/sharedModels/appModels/simulador.model';


@Injectable()

export class SimuladorService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteSimulador(id: number){
    return this.http.delete(AppConstants.baseSimulador + `/${id}`);
  }

  public getSimuladorsById(id: number): Observable<Simulador>{
    return this.http.get<Simulador>(AppConstants.baseSimulador + `/${id}`);
  }

  public getByIdSimulador(id: number): Observable<SimuladorPergunta>{
    return this.http.get<SimuladorPergunta>(AppConstants.basePerguntas + `/?IdNivel=${id}`);
  }

  public getSimulador(){
    return this.http.get(AppConstants.baseSimulador);
  }

  public salvarSimulador(simulador: Simulador){
    let mensagem: string = ''
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    this.http.post(AppConstants.baseSimulador, JSON.stringify(simulador), options).subscribe(data => {
      var simulador = JSON.parse(JSON.stringify(data));
    })
  }

  public saveSimulador(simulador: Simulador) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSimulador, simulador, options);
  }

  public putSimulador(simulador: Simulador) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSimulador, simulador, options);
  }
}

