import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioChegadaProximaPartidaComponent } from './coordenacao-relatorio-chegada-proxima-partida.component';

describe('CoordenacaoRelatorioChegadaProximaPartidaComponent', () => {
  let component: CoordenacaoRelatorioChegadaProximaPartidaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioChegadaProximaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioChegadaProximaPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioChegadaProximaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
