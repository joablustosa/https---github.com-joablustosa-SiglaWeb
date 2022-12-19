import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioDiscrepanciaPrevisaoComponent } from './coordenacao-relatorio-discrepancia-previsao.component';

describe('CoordenacaoRelatorioDiscrepanciaPrevisaoComponent', () => {
  let component: CoordenacaoRelatorioDiscrepanciaPrevisaoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioDiscrepanciaPrevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioDiscrepanciaPrevisaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioDiscrepanciaPrevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
