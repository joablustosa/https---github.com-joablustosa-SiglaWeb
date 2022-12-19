import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadePagamentoComponent } from './atividade-pagamento.component';

describe('AtividadePagamentoComponent', () => {
  let component: AtividadePagamentoComponent;
  let fixture: ComponentFixture<AtividadePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadePagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
