import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroServicosUnificadosComponent } from './coordenacao-cadastro-servicos-unificados.component';

describe('CoordenacaoCadastroServicosUnificadosComponent', () => {
  let component: CoordenacaoCadastroServicosUnificadosComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroServicosUnificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroServicosUnificadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroServicosUnificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
