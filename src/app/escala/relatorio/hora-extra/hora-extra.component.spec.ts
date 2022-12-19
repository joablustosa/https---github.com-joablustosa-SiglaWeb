import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraExtraComponent } from './hora-extra.component';

describe('HoraExtraComponent', () => {
  let component: HoraExtraComponent;
  let fixture: ComponentFixture<HoraExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoraExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
