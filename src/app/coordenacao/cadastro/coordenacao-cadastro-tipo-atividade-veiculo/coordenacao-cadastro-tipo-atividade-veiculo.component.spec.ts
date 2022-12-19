import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroTipoAtividadeVeiculoComponent } from './coordenacao-cadastro-tipo-atividade-veiculo.component';

describe('CoordenacaoCadastroTipoAtividadeVeiculoComponent', () => {
  let component: CoordenacaoCadastroTipoAtividadeVeiculoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroTipoAtividadeVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroTipoAtividadeVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroTipoAtividadeVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
