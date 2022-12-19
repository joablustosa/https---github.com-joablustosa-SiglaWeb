import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioTipoServicoComponent } from './coordenacao-relatorio-tipo-servico.component';

describe('CoordenacaoRelatorioTipoServicoComponent', () => {
  let component: CoordenacaoRelatorioTipoServicoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioTipoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioTipoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioTipoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
