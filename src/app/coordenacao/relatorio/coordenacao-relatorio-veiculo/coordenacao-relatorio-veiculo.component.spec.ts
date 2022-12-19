import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioVeiculoComponent } from './coordenacao-relatorio-veiculo.component';

describe('CoordenacaoRelatorioVeiculoComponent', () => {
  let component: CoordenacaoRelatorioVeiculoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
