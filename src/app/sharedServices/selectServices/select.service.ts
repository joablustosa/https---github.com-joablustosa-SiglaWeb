import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/AppConstants';
import { SelectAeronave } from 'src/app/sharedModels/selectModels/select-aeronave.model';
import { SelectAtividade } from 'src/app/sharedModels/selectModels/select-atividade.model';
import { SelectBaseOperacional } from 'src/app/sharedModels/selectModels/select-base-operacional.model';
import { SelectCargo } from 'src/app/sharedModels/selectModels/select-cargo';
import { SelectJustificativa } from 'src/app/sharedModels/selectModels/select-justificativa.model';
import { SelectNop } from 'src/app/sharedModels/selectModels/select-nop.model';
import { SelectRegional } from 'src/app/sharedModels/selectModels/select-regional.model';
import { SelectSiglaDestino } from 'src/app/sharedModels/selectModels/select-sigla-destino.model';
import { SelectSiglaLocal } from 'src/app/sharedModels/selectModels/select-sigla-local.model';
import { SelectSiglaOrigem } from 'src/app/sharedModels/selectModels/select-sigla-origem.model';
import { SelectTripulante } from 'src/app/sharedModels/selectModels/select-tripulante.model';
import { SigGrupo } from 'src/app/sharedModels/usuarioModels/sigUsuarioGrupo.model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {


  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
    ){}

  public getAeronave(): Observable<SelectAeronave>{
    return this.http.get<SelectAeronave>(AppConstants.baseRelatorioAeronave);
  }
  public getAtividade(): Observable<SelectAtividade>{
    return this.http.get<SelectAtividade>(AppConstants.baseRelatorioAtividade);
  }
  public getBaseOperacional(): Observable<SelectBaseOperacional>{
    return this.http.get<SelectBaseOperacional>(AppConstants.baseRelatorioBaseOperacional);
  }
  public getJustificativa(): Observable<SelectJustificativa>{
    return this.http.get<SelectJustificativa>(AppConstants.baseRelatorioJustificativa);
  }
  public getNop(): Observable<SelectNop>{
    return this.http.get<SelectNop>(AppConstants.baseRelatorioNop);
  }
  public getRegional(): Observable<SelectRegional>{
    return this.http.get<SelectRegional>(AppConstants.baseRelatorioRegional);
  }
  public getRegionalNop(): Observable<SelectRegional>{
    return this.http.get<SelectRegional>(AppConstants.baseRelatorioRegionalNop);
  }
  public getSiglaOrigem(): Observable<SelectSiglaOrigem>{
    return this.http.get<SelectSiglaOrigem>(AppConstants.baseRelatorioSiglaOrigem);
  }
  public getSiglaDestino(): Observable<SelectSiglaDestino>{
    return this.http.get<SelectSiglaDestino>(AppConstants.baseRelatorioSiglaDestino);
  }
  public getSiglaLocal(): Observable<SelectSiglaLocal>{
    return this.http.get<SelectSiglaLocal>(AppConstants.baseRelatorioSiglaLocal);
  }
  public getTripulante(): Observable<SelectTripulante>{
    return this.http.get<SelectTripulante>(AppConstants.baseRelatorioTripulante);
  }
  public getCargo(): Observable<SelectCargo>{
    return this.http.get<SelectCargo>(AppConstants.baseRelatorioCargo);
  }
  public getGrupo(): Observable<SigGrupo>{
    return this.http.get<SigGrupo>(AppConstants.baseSigUsuarioGrupos);
  }

}
