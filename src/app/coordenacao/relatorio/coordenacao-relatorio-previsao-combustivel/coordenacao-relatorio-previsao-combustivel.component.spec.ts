import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioPrevisaoCombustivelComponent } from './coordenacao-relatorio-previsao-combustivel.component';

describe('CoordenacaoRelatorioPrevisaoCombustivelComponent', () => {
  let component: CoordenacaoRelatorioPrevisaoCombustivelComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioPrevisaoCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioPrevisaoCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioPrevisaoCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
