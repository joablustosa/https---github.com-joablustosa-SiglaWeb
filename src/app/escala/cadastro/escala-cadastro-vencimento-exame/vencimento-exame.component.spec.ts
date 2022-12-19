import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencimentoExameComponent } from './vencimento-exame.component';

describe('VencimentoExameComponent', () => {
  let component: VencimentoExameComponent;
  let fixture: ComponentFixture<VencimentoExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencimentoExameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencimentoExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
