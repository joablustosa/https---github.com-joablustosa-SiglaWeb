import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltaComponent } from './falta.component';

describe('FaltaComponent', () => {
  let component: FaltaComponent;
  let fixture: ComponentFixture<FaltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
