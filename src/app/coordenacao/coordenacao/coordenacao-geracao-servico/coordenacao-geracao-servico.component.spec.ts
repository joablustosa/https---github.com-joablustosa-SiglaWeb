import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoGeracaoServicoComponent } from './coordenacao-geracao-servico.component';

describe('CoordenacaoGeracaoServicoComponent', () => {
  let component: CoordenacaoGeracaoServicoComponent;
  let fixture: ComponentFixture<CoordenacaoGeracaoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoGeracaoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoGeracaoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
