import { Component, OnInit } from '@angular/core';
import { Tripulante } from '../sharedModels/portalMotorista/tripulante.model';
import { LoginService } from '../sharedServices/login.services';
import { PartidasChegadasService } from '../sharedServices/partidasChegadasServices/partidasChegadas.service';

@Component({
  selector: 'app-partidas-chegadas',
  templateUrl: './partidas-chegadas.component.html',
  styleUrls: ['./partidas-chegadas.component.css'],
})
export class PartidasChegadasComponent implements OnInit {
  colunasPartida: string[] = [
    'servico',
    'origem',
    'destino',
    'horario',
    'frota',
    'veiculo',
    'motorista',
  ];
  colunasChegada: string[] = [
    'servico',
    'origem',
    'destino',
    'horario',
    'frota',
    'veiculo',
  ];
  timeLeft: number = 30;
  interval: any;
  tripulante!: Tripulante | null;
  partidas: any[] = [];
  chegadas: any[] = [];

  constructor(
    private partidaschegadasService: PartidasChegadasService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.tripulante = JSON.parse(localStorage.getItem('userSigla')!);
    this.startTimer(this.tripulante?.Id!);
    this.getPartidas(this.tripulante?.Id!);
    this.getChegadas(this.tripulante?.Id!);
  }

  startTimer(sequsuarioaerop: string) {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        if (this.timeLeft == 0) {
          this.getPartidas(sequsuarioaerop);
          this.getChegadas(sequsuarioaerop);
        }
      } else {
        this.timeLeft = 30;
      }
    }, 1000);
  }

  getPartidas(sequsuarioaerop: string) {
    this.partidaschegadasService
      .getPartida(sequsuarioaerop)
      .subscribe((response) => {
        this.partidas = response as [];
      });
  }

  getChegadas(sequsuarioaerop: string) {
    this.partidaschegadasService
      .getChegada(sequsuarioaerop)
      .subscribe((response) => {
        this.chegadas = response as [];
      });
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  sair() {
    this.loginService.logoutUsuario();
  }
}
