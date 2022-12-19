import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroComponenteVeiculoComponent } from './coordenacao-cadastro-componente-veiculo.component';

describe('CoordenacaoCadastroComponenteVeiculoComponent', () => {
  let component: CoordenacaoCadastroComponenteVeiculoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroComponenteVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroComponenteVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroComponenteVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
