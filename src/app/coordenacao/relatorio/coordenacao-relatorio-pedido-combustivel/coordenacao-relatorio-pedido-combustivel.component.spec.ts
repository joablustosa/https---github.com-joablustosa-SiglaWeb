import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioPedidoCombustivelComponent } from './coordenacao-relatorio-pedido-combustivel.component';

describe('CoordenacaoRelatorioPedidoCombustivelComponent', () => {
  let component: CoordenacaoRelatorioPedidoCombustivelComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioPedidoCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioPedidoCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioPedidoCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
