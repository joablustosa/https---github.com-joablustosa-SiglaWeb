import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioComponenteVeiculoComponent } from './coordenacao-relatorio-componente-veiculo.component';

describe('CoordenacaoRelatorioComponenteVeiculoComponent', () => {
  let component: CoordenacaoRelatorioComponenteVeiculoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioComponenteVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioComponenteVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioComponenteVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
