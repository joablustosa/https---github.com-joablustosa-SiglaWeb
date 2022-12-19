import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraTripulanteComponent } from './carteira-tripulante.component';

describe('CarteiraTripulanteComponent', () => {
  let component: CarteiraTripulanteComponent;
  let fixture: ComponentFixture<CarteiraTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
