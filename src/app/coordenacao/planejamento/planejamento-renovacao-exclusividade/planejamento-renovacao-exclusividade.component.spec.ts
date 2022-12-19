import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoRenovacaoExclusividadeComponent } from './planejamento-renovacao-exclusividade.component';

describe('PlanejamentoRenovacaoExclusividadeComponent', () => {
  let component: PlanejamentoRenovacaoExclusividadeComponent;
  let fixture: ComponentFixture<PlanejamentoRenovacaoExclusividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoRenovacaoExclusividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoRenovacaoExclusividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
