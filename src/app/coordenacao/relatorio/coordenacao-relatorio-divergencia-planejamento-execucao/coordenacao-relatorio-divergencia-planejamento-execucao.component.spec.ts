import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent } from './coordenacao-relatorio-divergencia-planejamento-execucao.component';

describe('CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent', () => {
  let component: CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioDivergenciaPlanejamentoExecucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
