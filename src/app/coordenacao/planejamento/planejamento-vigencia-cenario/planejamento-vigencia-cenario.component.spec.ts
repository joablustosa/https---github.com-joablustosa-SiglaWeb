import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoVigenciaCenarioComponent } from './planejamento-vigencia-cenario.component';

describe('PlanejamentoVigenciaCenarioComponent', () => {
  let component: PlanejamentoVigenciaCenarioComponent;
  let fixture: ComponentFixture<PlanejamentoVigenciaCenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoVigenciaCenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoVigenciaCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
