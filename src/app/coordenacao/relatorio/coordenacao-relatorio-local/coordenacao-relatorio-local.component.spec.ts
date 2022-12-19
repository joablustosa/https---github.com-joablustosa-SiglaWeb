import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioLocalComponent } from './coordenacao-relatorio-local.component';

describe('CoordenacaoRelatorioLocalComponent', () => {
  let component: CoordenacaoRelatorioLocalComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
