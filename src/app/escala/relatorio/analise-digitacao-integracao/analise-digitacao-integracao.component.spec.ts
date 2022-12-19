import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseDigitacaoIntegracaoComponent } from './analise-digitacao-integracao.component';

describe('AnaliseDigitacaoIntegracaoComponent', () => {
  let component: AnaliseDigitacaoIntegracaoComponent;
  let fixture: ComponentFixture<AnaliseDigitacaoIntegracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaliseDigitacaoIntegracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseDigitacaoIntegracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
