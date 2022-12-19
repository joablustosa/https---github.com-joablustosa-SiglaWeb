import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioUnidadeNegocioComponent } from './coordenacao-relatorio-unidade-negocio.component';

describe('CoordenacaoRelatorioUnidadeNegocioComponent', () => {
  let component: CoordenacaoRelatorioUnidadeNegocioComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioUnidadeNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioUnidadeNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioUnidadeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
