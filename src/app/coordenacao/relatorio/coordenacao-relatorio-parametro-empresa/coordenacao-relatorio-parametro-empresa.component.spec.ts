import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioParametroEmpresaComponent } from './coordenacao-relatorio-parametro-empresa.component';

describe('CoordenacaoRelatorioParametroEmpresaComponent', () => {
  let component: CoordenacaoRelatorioParametroEmpresaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioParametroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioParametroEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioParametroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
