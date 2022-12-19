import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolgaComponent } from './folga.component';

describe('FolgaComponent', () => {
  let component: FolgaComponent;
  let fixture: ComponentFixture<FolgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
