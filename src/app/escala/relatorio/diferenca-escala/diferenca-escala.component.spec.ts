import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferencaEscalaComponent } from './diferenca-escala.component';

describe('DiferencaEscalaComponent', () => {
  let component: DiferencaEscalaComponent;
  let fixture: ComponentFixture<DiferencaEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferencaEscalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferencaEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
