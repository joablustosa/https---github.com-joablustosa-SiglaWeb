import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraLinhaComponent } from './carteira-linha.component';

describe('CarteiraLinhaComponent', () => {
  let component: CarteiraLinhaComponent;
  let fixture: ComponentFixture<CarteiraLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
