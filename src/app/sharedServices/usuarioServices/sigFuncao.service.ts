import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { Modulo, SigFuncao } from 'src/app/sharedModels/usuarioModels/sigFuncao.model';


@Injectable()

export class SigFuncaoService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteSigFuncao(id: number){
    return this.http.delete(AppConstants.baseSigFuncoes + `/${id}`);
  }


  // public getSigFuncaosById(id: number): Observable<SigFuncao>{
  //   return this.http.get<SigFuncao>(AppConstants.baseSigFuncaos + `/${id}`);
  // }


  // public getSigFuncao(){
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.get(AppConstants.baseSigFuncaos, options);
  // }

  public getSigFuncao() : Observable<SigFuncao>{
    return this.http.get(AppConstants.baseSigFuncoes);
  }

  public getSigFuncaoTratada(){
    return this.http.get(AppConstants.baseSigFuncoes+'/FuncaoFormatada');
  }


  public saveSigFuncao(sigFuncao: SigFuncao) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSigFuncoes, sigFuncao, options);
  }


  public putSigFuncao(sigFuncao: SigFuncao) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSigFuncoes, sigFuncao, options);
  }
}
