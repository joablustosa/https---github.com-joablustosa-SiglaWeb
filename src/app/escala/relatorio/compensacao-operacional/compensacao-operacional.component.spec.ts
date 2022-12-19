import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensacaoOperacionalComponent } from './compensacao-operacional.component';

describe('CompensacaoOperacionalComponent', () => {
  let component: CompensacaoOperacionalComponent;
  let fixture: ComponentFixture<CompensacaoOperacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompensacaoOperacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensacaoOperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
