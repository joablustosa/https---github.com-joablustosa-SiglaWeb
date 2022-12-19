import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelValorCombustivelComponent } from './combustivel-valor-combustivel.component';

describe('CombustivelValorCombustivelComponent', () => {
  let component: CombustivelValorCombustivelComponent;
  let fixture: ComponentFixture<CombustivelValorCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustivelValorCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelValorCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
