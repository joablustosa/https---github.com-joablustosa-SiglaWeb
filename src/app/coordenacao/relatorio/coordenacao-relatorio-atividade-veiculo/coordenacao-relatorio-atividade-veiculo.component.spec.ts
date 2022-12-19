import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioAtividadeVeiculoComponent } from './coordenacao-relatorio-atividade-veiculo.component';

describe('CoordenacaoRelatorioAtividadeVeiculoComponent', () => {
  let component: CoordenacaoRelatorioAtividadeVeiculoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioAtividadeVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioAtividadeVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioAtividadeVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
