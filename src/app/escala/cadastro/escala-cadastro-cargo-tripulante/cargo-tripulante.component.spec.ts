import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTripulanteComponent } from './cargo-tripulante.component';

describe('CargoTripulanteComponent', () => {
  let component: CargoTripulanteComponent;
  let fixture: ComponentFixture<CargoTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
