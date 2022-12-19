import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { SigUsuario, SigUsuarioFuncao, SigUsuarioPerfil } from 'src/app/sharedModels/usuarioModels/sigUsuario.model';


@Injectable()

export class SigUsuarioLocalService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  // public deleteSigUsuario(id: number){
  //   return this.http.delete(AppConstants.baseSigUsuarios + `/${id}`);
  // }


//   public getSigUsuariosById(id: number): Observable<SigUsuario>{
//     return this.http.get<SigUsuario>(AppConstants.baseSigUsuario + `/${id}`);
//   }

//     public getFuncoesSigUsuarioById(id: number): Observable<SigUsuarioFuncao>{
//     return this.http.get<SigUsuarioFuncao>(AppConstants.baseSigUsuario + `/UsuarioFuncao/${id}`);
//   }

//   public getPerfisSigUsuarioById(id: number): Observable<SigUsuarioPerfil>{
//   return this.http.get<SigUsuarioPerfil>(AppConstants.baseSigUsuario + `/UsuarioPerfil/${id}`);
// }


  // public getSigUsuario(){
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.get(AppConstants.baseSigUsuarios, options);
  // }

  public getSigUsuarioLocal() : Observable<SigUsuario>{
    // let token = localStorage.getItem("tokenSigla");
    // let headers = new HttpHeaders({
    //   'Content-Type':'application/json',
    //   'Authorization': `Bearer ${token}`
    // })
    // let options = {
    //   headers,
    // }
    return this.http.get(AppConstants.baseSigUsuarioLocais);
  }


  // public saveSigUsuario(sigUsuario: SigUsuario) {
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     //'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.post(AppConstants.baseSigUsuario, sigUsuario, options);
  // }


  // public putSigUsuario(sigUsuario: SigUsuario) {
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.post(AppConstants.baseSigUsuarioDesativa, sigUsuario);
  // }

  public resetSenhaSigUsuario(sequsuarioaerop: string) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.get(AppConstants.baseSigUsuarioLocais + '/ResetSenha?sequsuarioaerop=' + sequsuarioaerop);
  }
}
