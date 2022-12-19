import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { SimuladorResultado } from 'src/app/sharedModels/appModels/simuladorResultado.model';


@Injectable()

export class SimuladorResultadoService{


  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteSimuladorResultado(id: number){
    return this.http.delete(AppConstants.baseSimulador + `/${id}`);
  }


  public getSimuladorResultadosById(id: number): Observable<SimuladorResultado>{
    return this.http.get<SimuladorResultado>(AppConstants.baseSimulador + `/${id}`);
  }


  public getSimuladorResultado(){
    return this.http.get(AppConstants.baseSimuladorResultado);
  }


  public saveSimulador(checklist: SimuladorResultado) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSimulador, checklist, options);
  }


  public putSimuladorResultado(checklist: SimuladorResultado) {
    let token = localStorage.getItem("tokenSigla");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSimulador, checklist, options);
  }
}
