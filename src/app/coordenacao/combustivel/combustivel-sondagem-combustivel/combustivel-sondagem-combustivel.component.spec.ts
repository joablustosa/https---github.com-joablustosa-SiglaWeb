import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelSondagemCombustivelComponent } from './combustivel-sondagem-combustivel.component';

describe('CombustivelSondagemCombustivelComponent', () => {
  let component: CombustivelSondagemCombustivelComponent;
  let fixture: ComponentFixture<CombustivelSondagemCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustivelSondagemCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelSondagemCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
