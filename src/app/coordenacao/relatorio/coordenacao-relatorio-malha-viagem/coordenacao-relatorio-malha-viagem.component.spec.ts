import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioMalhaViagemComponent } from './coordenacao-relatorio-malha-viagem.component';

describe('CoordenacaoRelatorioMalhaViagemComponent', () => {
  let component: CoordenacaoRelatorioMalhaViagemComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioMalhaViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioMalhaViagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioMalhaViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
