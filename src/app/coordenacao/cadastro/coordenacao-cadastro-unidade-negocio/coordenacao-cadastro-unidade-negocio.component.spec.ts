import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroUnidadeNegocioComponent } from './coordenacao-cadastro-unidade-negocio.component';

describe('CoordenacaoCadastroUnidadeNegocioComponent', () => {
  let component: CoordenacaoCadastroUnidadeNegocioComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroUnidadeNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroUnidadeNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroUnidadeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
