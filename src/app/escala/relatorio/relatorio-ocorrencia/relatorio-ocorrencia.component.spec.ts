import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioOcorrenciaComponent } from './relatorio-ocorrencia.component';

describe('RelatorioOcorrenciaComponent', () => {
  let component: RelatorioOcorrenciaComponent;
  let fixture: ComponentFixture<RelatorioOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioOcorrenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
