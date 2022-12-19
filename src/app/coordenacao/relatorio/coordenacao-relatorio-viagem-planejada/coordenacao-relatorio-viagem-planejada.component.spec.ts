import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioViagemPlanejadaComponent } from './coordenacao-relatorio-viagem-planejada.component';

describe('CoordenacaoRelatorioViagemPlanejadaComponent', () => {
  let component: CoordenacaoRelatorioViagemPlanejadaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioViagemPlanejadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioViagemPlanejadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioViagemPlanejadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
