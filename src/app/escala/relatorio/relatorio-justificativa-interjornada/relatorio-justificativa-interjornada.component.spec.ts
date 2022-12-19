import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioJustificativaInterjornadaComponent } from './relatorio-justificativa-interjornada.component';

describe('RelatorioJustificativaInterjornadaComponent', () => {
  let component: RelatorioJustificativaInterjornadaComponent;
  let fixture: ComponentFixture<RelatorioJustificativaInterjornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioJustificativaInterjornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioJustificativaInterjornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
