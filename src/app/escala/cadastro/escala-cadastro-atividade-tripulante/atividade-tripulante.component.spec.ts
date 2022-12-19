import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeTripulanteComponent } from './atividade-tripulante.component';

describe('AtividadeTripulanteComponent', () => {
  let component: AtividadeTripulanteComponent;
  let fixture: ComponentFixture<AtividadeTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
