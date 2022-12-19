import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentoPeriodoComponent } from './fechamento-periodo.component';

describe('FechamentoPeriodoComponent', () => {
  let component: FechamentoPeriodoComponent;
  let fixture: ComponentFixture<FechamentoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechamentoPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechamentoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
