import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroTipoServicoComponent } from './coordenacao-cadastro-tipo-servico.component';

describe('CoordenacaoCadastroTipoServicoComponent', () => {
  let component: CoordenacaoCadastroTipoServicoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroTipoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroTipoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroTipoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
