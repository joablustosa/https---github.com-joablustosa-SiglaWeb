import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoTripulanteLinhaComponent } from './custo-tripulante-linha.component';

describe('CustoTripulanteLinhaComponent', () => {
  let component: CustoTripulanteLinhaComponent;
  let fixture: ComponentFixture<CustoTripulanteLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustoTripulanteLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoTripulanteLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
