import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveitamentoTripulanteComponent } from './aproveitamento-tripulante.component';

describe('AproveitamentoTripulanteComponent', () => {
  let component: AproveitamentoTripulanteComponent;
  let fixture: ComponentFixture<AproveitamentoTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproveitamentoTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveitamentoTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
