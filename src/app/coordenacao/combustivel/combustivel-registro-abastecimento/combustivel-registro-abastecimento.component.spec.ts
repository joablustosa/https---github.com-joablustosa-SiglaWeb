import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelRegistroAbastecimentoComponent } from './combustivel-registro-abastecimento.component';

describe('CombustivelRegistroAbastecimentoComponent', () => {
  let component: CombustivelRegistroAbastecimentoComponent;
  let fixture: ComponentFixture<CombustivelRegistroAbastecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustivelRegistroAbastecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelRegistroAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
