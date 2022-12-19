import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacaoPagamentoComponent } from './publicacao-pagamento.component';

describe('PublicacaoPagamentoComponent', () => {
  let component: PublicacaoPagamentoComponent;
  let fixture: ComponentFixture<PublicacaoPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacaoPagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacaoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
