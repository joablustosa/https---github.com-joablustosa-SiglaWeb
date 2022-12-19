import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioServicosUnificadosComponent } from './coordenacao-relatorio-servicos-unificados.component';

describe('CoordenacaoRelatorioServicosUnificadosComponent', () => {
  let component: CoordenacaoRelatorioServicosUnificadosComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioServicosUnificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioServicosUnificadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioServicosUnificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
