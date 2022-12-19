import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioRegistroAbastecimentoComponent } from './coordenacao-relatorio-registro-abastecimento.component';

describe('CoordenacaoRelatorioRegistroAbastecimentoComponent', () => {
  let component: CoordenacaoRelatorioRegistroAbastecimentoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioRegistroAbastecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioRegistroAbastecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioRegistroAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
