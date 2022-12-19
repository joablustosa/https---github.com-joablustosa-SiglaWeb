import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioViagemPlanejadaAnaliseComponent } from './coordenacao-relatorio-viagem-planejada-analise.component';

describe('CoordenacaoRelatorioViagemPlanejadaAnaliseComponent', () => {
  let component: CoordenacaoRelatorioViagemPlanejadaAnaliseComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioViagemPlanejadaAnaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioViagemPlanejadaAnaliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioViagemPlanejadaAnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
