import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent } from './coordenacao-relatorio-deslocamento-horario-planejado.component';

describe('CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent', () => {
  let component: CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioDeslocamentoHorarioPlanejadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
