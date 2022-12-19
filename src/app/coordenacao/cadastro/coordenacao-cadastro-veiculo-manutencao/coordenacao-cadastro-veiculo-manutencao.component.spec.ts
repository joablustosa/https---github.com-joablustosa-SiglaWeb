import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroVeiculoManutencaoComponent } from './coordenacao-cadastro-veiculo-manutencao.component';

describe('CoordenacaoCadastroVeiculoManutencaoComponent', () => {
  let component: CoordenacaoCadastroVeiculoManutencaoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroVeiculoManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroVeiculoManutencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroVeiculoManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
