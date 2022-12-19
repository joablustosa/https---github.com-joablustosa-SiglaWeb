import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioOperacaoFretamentoComponent } from './coordenacao-relatorio-operacao-fretamento.component';

describe('CoordenacaoRelatorioOperacaoFretamentoComponent', () => {
  let component: CoordenacaoRelatorioOperacaoFretamentoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioOperacaoFretamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioOperacaoFretamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioOperacaoFretamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
