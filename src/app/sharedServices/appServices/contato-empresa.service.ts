import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { Empresa } from 'src/app/sharedModels/appModels/empresa.model';


@Injectable()

export class ContatoEmpresaService{


  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteEmpresa(id: number){
    return this.http.delete(AppConstants.baseEmpresa + `/${id}`);
  }


  public getEmpresasById(id: number): Observable<Empresa>{
    return this.http.get<Empresa>(AppConstants.baseEmpresa + `/${id}`);
  }


  public getEmpresa(){
    return this.http.get(AppConstants.baseEmpresa);
  }


  public saveEmpresa(empresa: Empresa) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseEmpresa, empresa, options);
  }


  public putEmpresa(empresa: Empresa) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseEmpresa, empresa, options);
  }
}
