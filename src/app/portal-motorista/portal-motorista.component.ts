import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { EscalaMotorista } from '../sharedModels/portalMotorista/escalaMotorista.model';
import { Tripulante } from '../sharedModels/portalMotorista/tripulante.model';
import { LoginService } from '../sharedServices/login.services';
import { PortalMotoristaService } from '../sharedServices/portalMotorista/portalMotorista.service';

@Component({
  selector: 'app-portal-motorista',
  templateUrl: './portal-motorista.component.html',
  styleUrls: ['./portal-motorista.component.css']
})
export class PortalMotoristaComponent implements OnInit {
  jornadas: any[] = [];
  jornadaFiltrada: any[] = [];
  mensagens: any[] = [];
  tripulante!: Tripulante | null
  corJornada: string = "red";

  constructor(
    private loginService: LoginService,
    private portalMotorista: PortalMotoristaService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.tripulante = JSON.parse(localStorage.getItem('userSigla')!);
    this.getJornadas(this.tripulante?.sequencial!);
    this.getMensagens(this.tripulante?.sequencial!);
  }

  public getJornadas(seqtripulante: string) {
    this.spinner.show();
    this.portalMotorista.getEscalaMotorista(seqtripulante).subscribe(response => {
      this.jornadas = response as [];
      for (var i = 0; i < this.jornadas.length; i++) {
        if (!this.jornadas[i - 1] || this.jornadas[i].dtjornada !== this.jornadas[i - 1].dtjornada) {
          this.jornadaFiltrada.push(this.jornadas[i])
        }
      }
      console.log(this.jornadaFiltrada);
      this.spinner.hide();
    })
  }

  public getMensagens(seqtripulante: string) {
    this.spinner.show();
    this.portalMotorista.getMensagem(seqtripulante).subscribe(response => {
      this.mensagens = response as [];
      this.spinner.hide();
    })
  }

  titulo(jornada: EscalaMotorista) {
    if (jornada.flgestado == "P" || jornada.flgestado == "A") {
      return "Clique para vizualizar sua Escala"
    } else {
      return this.formataData(jornada.dtjornada)
    }
  }

  statusPainelFuncao(jornada: EscalaMotorista) {
    if (jornada.flgestado == "P" || jornada.flgestado == "A") {
      return false
    } else {
      return true
    }
  }

  formataData(data: string) {
    var dia = data.substring(8, 10);
    var mes = data.substring(5, 7);
    var ano = data.substring(0, 4);
    return `${dia}/${mes}/${ano}`;
  }

  formataDataCompleta(data: string) {
    var dia = data.substring(8, 10);
    var mes = data.substring(5, 7);
    var ano = data.substring(0, 4);
    var hora = data.substring(11,19)
    return `${dia}/${mes}/${ano} - ${hora}`;
  }

  logoff() {
    this.loginService.logoutMotorista();
  }

  vizualizaJornada(jornada: EscalaMotorista){
    this.portalMotorista.confirmaEscala(jornada).subscribe(response => {
      this.getJornadas(this.tripulante?.sequencial!);
    })
  }
}
