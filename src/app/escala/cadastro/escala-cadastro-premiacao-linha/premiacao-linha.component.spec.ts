import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacaoLinhaComponent } from './premiacao-linha.component';

describe('PremiacaoLinhaComponent', () => {
  let component: PremiacaoLinhaComponent;
  let fixture: ComponentFixture<PremiacaoLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiacaoLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiacaoLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
