import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioQuantitativoInicioFimComponent } from './coordenacao-relatorio-quantitativo-inicio-fim.component';

describe('CoordenacaoRelatorioQuantitativoInicioFimComponent', () => {
  let component: CoordenacaoRelatorioQuantitativoInicioFimComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioQuantitativoInicioFimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioQuantitativoInicioFimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioQuantitativoInicioFimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
