import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadaTripulanteComponent } from './parada-tripulante.component';

describe('ParadaTripulanteComponent', () => {
  let component: ParadaTripulanteComponent;
  let fixture: ComponentFixture<ParadaTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParadaTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadaTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
