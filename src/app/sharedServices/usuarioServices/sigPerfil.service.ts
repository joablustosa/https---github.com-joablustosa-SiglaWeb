import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { SigPerfil } from 'src/app/sharedModels/usuarioModels/sigPerfil.model';


@Injectable()

export class SigPerfilService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteSigPerfil(id: number){
    return this.http.delete(AppConstants.baseSigPerfis + `/${id}`);
  }


  public getSigPerfilsById(id: number): Observable<SigPerfil>{
    return this.http.get<SigPerfil>(AppConstants.baseSigPerfis + `/${id}`);
  }


  // public getSigPerfil(){
  //   let token = localStorage.getItem("tokenSigla");
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   let options = {
  //     headers,
  //   }
  //   return this.http.get(AppConstants.baseSigPerfils, options);
  // }

  public getSigPerfil() : Observable<SigPerfil>{
    return this.http.get(AppConstants.baseSigPerfis);
  }


  public saveSigPerfil(sigPerfil: SigPerfil) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSigPerfis, sigPerfil, options);
  }


  public putSigPerfil(sigPerfil: SigPerfil) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSigPerfis, sigPerfil, options);
  }
}
