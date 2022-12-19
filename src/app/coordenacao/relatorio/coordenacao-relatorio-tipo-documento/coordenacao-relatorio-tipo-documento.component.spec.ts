import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioTipoDocumentoComponent } from './coordenacao-relatorio-tipo-documento.component';

describe('CoordenacaoRelatorioTipoDocumentoComponent', () => {
  let component: CoordenacaoRelatorioTipoDocumentoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioTipoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
