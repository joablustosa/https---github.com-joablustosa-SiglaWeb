import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacaoBaseOperacionalComponent } from './premiacao-base-operacional.component';

describe('PremiacaoBaseOperacionalComponent', () => {
  let component: PremiacaoBaseOperacionalComponent;
  let fixture: ComponentFixture<PremiacaoBaseOperacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiacaoBaseOperacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiacaoBaseOperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
