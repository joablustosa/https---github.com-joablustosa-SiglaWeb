import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoFolgaComponent } from './tempo-folga.component';

describe('TempoFolgaComponent', () => {
  let component: TempoFolgaComponent;
  let fixture: ComponentFixture<TempoFolgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoFolgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoFolgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
