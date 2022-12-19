import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoCopiaCenarioComponent } from './planejamento-copia-cenario.component';

describe('PlanejamentoCopiaCenarioComponent', () => {
  let component: PlanejamentoCopiaCenarioComponent;
  let fixture: ComponentFixture<PlanejamentoCopiaCenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoCopiaCenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoCopiaCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
