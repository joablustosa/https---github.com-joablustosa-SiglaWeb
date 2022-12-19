import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioViagemPlanejadaLocalComponent } from './coordenacao-relatorio-viagem-planejada-local.component';

describe('CoordenacaoRelatorioViagemPlanejadaLocalComponent', () => {
  let component: CoordenacaoRelatorioViagemPlanejadaLocalComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioViagemPlanejadaLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioViagemPlanejadaLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioViagemPlanejadaLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
