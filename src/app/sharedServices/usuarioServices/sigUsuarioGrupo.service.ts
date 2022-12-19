import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { SigGrupo, SigUsuarioGrupo } from 'src/app/sharedModels/usuarioModels/sigUsuarioGrupo.model';


@Injectable()

export class SigUsuarioGrupoService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteSigUsuarioGrupo(id: number){
    return this.http.delete(AppConstants.baseSigUsuarioGrupos + `/${id}`);
  }


  // public getSigUsuarioGruposById(id: number): Observable<SigUsuarioGrupo>{
  //   return this.http.get<SigUsuarioGrupo>(AppConstants.baseSigUsuarioGrupos + `/${id}`);
  // }


  // public getSigUsuarioGrupo(){
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.get(AppConstants.baseSigUsuarioGrupos, options);
  // }

  public getSigUsuarioGrupo() : Observable<SigGrupo>{
    return this.http.get(AppConstants.baseSigUsuarioGrupos);
  }


  public saveSigUsuarioGrupo(sigUsuario: SigUsuarioGrupo) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
      // 'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSigUsuarioGrupos, sigUsuario, options);
  }


  public putSigUsuarioGrupo(sigUsuario: SigUsuarioGrupo) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSigUsuarioGrupos, sigUsuario, options);
  }
}
