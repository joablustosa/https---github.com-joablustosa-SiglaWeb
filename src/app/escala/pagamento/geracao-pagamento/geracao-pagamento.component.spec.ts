import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracaoPagamentoComponent } from './geracao-pagamento.component';

describe('GeracaoPagamentoComponent', () => {
  let component: GeracaoPagamentoComponent;
  let fixture: ComponentFixture<GeracaoPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeracaoPagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeracaoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
