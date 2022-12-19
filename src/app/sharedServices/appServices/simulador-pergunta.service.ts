import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AppConstants } from 'src/app/AppConstants';
import { SimuladorPergunta } from 'src/app/sharedModels/appModels/simuladorPergunta.model';


@Injectable()

export class PerguntaService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deletePergunta(id: number){
    return this.http.delete(AppConstants.basePerguntas + `/${id}`);
  }

  public getByIdPergunta(id: number): Observable<SimuladorPergunta>{
    return this.http.get<SimuladorPergunta>(AppConstants.basePerguntas + `/${id}`);
  }

  public getPergunta(id: number){
    return this.http.get(AppConstants.basePerguntasByNivel + `/${id}?IdNivel=${id}`);
  }

  public getPerguntas(){
    return this.http.get(AppConstants.basePerguntas);
  }

  public savePergunta(pergunta: SimuladorPergunta) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.basePerguntas, pergunta, options);
  }

  public putPergunta(pergunta: SimuladorPergunta) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.basePerguntas, pergunta, options);
  }
}

