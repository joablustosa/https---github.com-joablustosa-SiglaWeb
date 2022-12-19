import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaTripulanteComponent } from './escala-tripulante.component';

describe('EscalaTripulanteComponent', () => {
  let component: EscalaTripulanteComponent;
  let fixture: ComponentFixture<EscalaTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
