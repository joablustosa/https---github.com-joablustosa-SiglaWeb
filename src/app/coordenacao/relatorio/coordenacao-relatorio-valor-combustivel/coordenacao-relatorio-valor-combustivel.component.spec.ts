import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioValorCombustivelComponent } from './coordenacao-relatorio-valor-combustivel.component';

describe('CoordenacaoRelatorioValorCombustivelComponent', () => {
  let component: CoordenacaoRelatorioValorCombustivelComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioValorCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioValorCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioValorCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
