import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelDistribuidorComponent } from './combustivel-distribuidor.component';

describe('CombustivelDistribuidorComponent', () => {
  let component: CombustivelDistribuidorComponent;
  let fixture: ComponentFixture<CombustivelDistribuidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustivelDistribuidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
