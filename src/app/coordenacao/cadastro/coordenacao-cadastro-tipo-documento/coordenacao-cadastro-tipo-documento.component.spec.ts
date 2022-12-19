import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroTipoDocumentoComponent } from './coordenacao-cadastro-tipo-documento.component';

describe('CoordenacaoCadastroTipoDocumentoComponent', () => {
  let component: CoordenacaoCadastroTipoDocumentoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroTipoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
