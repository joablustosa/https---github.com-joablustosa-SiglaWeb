import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraAdicionalComponent } from './hora-adicional.component';

describe('HoraAdicionalComponent', () => {
  let component: HoraAdicionalComponent;
  let fixture: ComponentFixture<HoraAdicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoraAdicionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
