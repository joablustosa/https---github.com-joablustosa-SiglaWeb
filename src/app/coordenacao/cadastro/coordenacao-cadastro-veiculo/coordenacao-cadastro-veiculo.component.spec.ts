import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroVeiculoComponent } from './coordenacao-cadastro-veiculo.component';

describe('CoordenacaoCadastroVeiculoComponent', () => {
  let component: CoordenacaoCadastroVeiculoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
