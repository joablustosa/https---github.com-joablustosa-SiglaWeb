import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoMalhaViagemComponent } from './planejamento-malha-viagem.component';

describe('PlanejamentoMalhaViagemComponent', () => {
  let component: PlanejamentoMalhaViagemComponent;
  let fixture: ComponentFixture<PlanejamentoMalhaViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoMalhaViagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoMalhaViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
