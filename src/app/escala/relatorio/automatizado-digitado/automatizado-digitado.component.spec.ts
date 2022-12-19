import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizadoDigitadoComponent } from './automatizado-digitado.component';

describe('AutomatizadoDigitadoComponent', () => {
  let component: AutomatizadoDigitadoComponent;
  let fixture: ComponentFixture<AutomatizadoDigitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomatizadoDigitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatizadoDigitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
