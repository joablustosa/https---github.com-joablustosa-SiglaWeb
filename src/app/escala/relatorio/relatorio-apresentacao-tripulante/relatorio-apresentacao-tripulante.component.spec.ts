import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioApresentacaoTripulanteComponent } from './relatorio-apresentacao-tripulante.component';

describe('RelatorioApresentacaoTripulanteComponent', () => {
  let component: RelatorioApresentacaoTripulanteComponent;
  let fixture: ComponentFixture<RelatorioApresentacaoTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioApresentacaoTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioApresentacaoTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
