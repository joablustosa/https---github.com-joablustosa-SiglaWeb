import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelPeriodoAbastecimentoComponent } from './combustivel-periodo-abastecimento.component';

describe('CombustivelPeriodoAbastecimentoComponent', () => {
  let component: CombustivelPeriodoAbastecimentoComponent;
  let fixture: ComponentFixture<CombustivelPeriodoAbastecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustivelPeriodoAbastecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelPeriodoAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
