import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoCelularComponent } from './movimentacao-celular.component';

describe('MovimentacaoCelularComponent', () => {
  let component: MovimentacaoCelularComponent;
  let fixture: ComponentFixture<MovimentacaoCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
