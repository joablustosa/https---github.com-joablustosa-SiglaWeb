import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoCenarioComponent } from './planejamento-cenario.component';

describe('PlanejamentoCenarioComponent', () => {
  let component: PlanejamentoCenarioComponent;
  let fixture: ComponentFixture<PlanejamentoCenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoCenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
