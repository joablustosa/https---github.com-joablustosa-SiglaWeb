import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoTripulanteComponent } from './funcao-tripulante.component';

describe('FuncaoTripulanteComponent', () => {
  let component: FuncaoTripulanteComponent;
  let fixture: ComponentFixture<FuncaoTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncaoTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
