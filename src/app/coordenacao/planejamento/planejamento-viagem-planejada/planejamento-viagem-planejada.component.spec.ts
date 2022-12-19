import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoViagemPlanejadaComponent } from './planejamento-viagem-planejada.component';

describe('PlanejamentoViagemPlanejadaComponent', () => {
  let component: PlanejamentoViagemPlanejadaComponent;
  let fixture: ComponentFixture<PlanejamentoViagemPlanejadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoViagemPlanejadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoViagemPlanejadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
