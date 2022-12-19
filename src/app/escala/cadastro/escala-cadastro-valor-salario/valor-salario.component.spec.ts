import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorSalarioComponent } from './valor-salario.component';

describe('ValorSalarioComponent', () => {
  let component: ValorSalarioComponent;
  let fixture: ComponentFixture<ValorSalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorSalarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
