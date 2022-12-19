import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroParametroEmpresaComponent } from './coordenacao-cadastro-parametro-empresa.component';

describe('CoordenacaoCadastroParametroEmpresaComponent', () => {
  let component: CoordenacaoCadastroParametroEmpresaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroParametroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroParametroEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroParametroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
