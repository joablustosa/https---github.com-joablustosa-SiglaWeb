import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTripulanteComponent } from './base-tripulante.component';

describe('BaseTripulanteComponent', () => {
  let component: BaseTripulanteComponent;
  let fixture: ComponentFixture<BaseTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
