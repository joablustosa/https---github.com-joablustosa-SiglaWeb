import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { SigFuncao } from 'src/app/sharedModels/usuarioModels/sigFuncao.model';
import { SigPerfilFuncao, SigPerfilFuncaoModel } from 'src/app/sharedModels/usuarioModels/sigPerfilFuncao.model';


@Injectable()

export class SigPerfilFuncaoService{
  change =  new Subject<any>();
  
  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteSigPerfilFuncao(id: number, codfuncao: string){
    return this.http.delete(AppConstants.baseSigPerfilFuncoes + `?id=${id}&codfuncao=${codfuncao}`);
  }


  public getSigPerfilFuncaoById(id: number): Observable<SigPerfilFuncao>{
    return this.http.get<SigPerfilFuncao>(AppConstants.baseSigPerfilFuncoes + `/${id}`);
  }

  emitValue(value: any){
    this.change.next(value);
  }

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

  public getSigPerfilFuncao() : Observable<SigPerfilFuncao>{
    return this.http.get(AppConstants.baseSigPerfilFuncoes);
  }


  public saveSigPerfilFuncao(sigFuncao: SigPerfilFuncaoModel[]) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSigPerfilFuncoes, sigFuncao, options);
  }


  public putSigPerfilFuncao(sigFuncao: SigPerfilFuncao) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSigPerfilFuncoes, sigFuncao, options);
  }
}
