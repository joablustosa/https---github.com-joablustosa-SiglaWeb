import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroAtividadeVeiculoComponent } from './coordenacao-cadastro-atividade-veiculo.component';

describe('CoordenacaoCadastroAtividadeVeiculoComponent', () => {
  let component: CoordenacaoCadastroAtividadeVeiculoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroAtividadeVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroAtividadeVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroAtividadeVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
