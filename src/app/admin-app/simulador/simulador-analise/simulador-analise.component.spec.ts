import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorAnaliseComponent } from './simulador-analise.component';

describe('SimuladorAnaliseComponent', () => {
  let component: SimuladorAnaliseComponent;
  let fixture: ComponentFixture<SimuladorAnaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorAnaliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorAnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
