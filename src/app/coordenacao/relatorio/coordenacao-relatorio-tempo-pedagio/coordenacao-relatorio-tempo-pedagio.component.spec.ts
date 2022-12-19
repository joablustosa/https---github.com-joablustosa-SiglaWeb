import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioTempoPedagioComponent } from './coordenacao-relatorio-tempo-pedagio.component';

describe('CoordenacaoRelatorioTempoPedagioComponent', () => {
  let component: CoordenacaoRelatorioTempoPedagioComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioTempoPedagioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioTempoPedagioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioTempoPedagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
