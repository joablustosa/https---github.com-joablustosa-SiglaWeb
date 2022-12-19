import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioValorPedagioComponent } from './coordenacao-relatorio-valor-pedagio.component';

describe('CoordenacaoRelatorioValorPedagioComponent', () => {
  let component: CoordenacaoRelatorioValorPedagioComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioValorPedagioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioValorPedagioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioValorPedagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
