import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripulanteSemPontoComponent } from './tripulante-sem-ponto.component';

describe('TripulanteSemPontoComponent', () => {
  let component: TripulanteSemPontoComponent;
  let fixture: ComponentFixture<TripulanteSemPontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripulanteSemPontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripulanteSemPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
