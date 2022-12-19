import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioVeiculoManutencaoComponent } from './coordenacao-relatorio-veiculo-manutencao.component';

describe('CoordenacaoRelatorioVeiculoManutencaoComponent', () => {
  let component: CoordenacaoRelatorioVeiculoManutencaoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioVeiculoManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioVeiculoManutencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioVeiculoManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
