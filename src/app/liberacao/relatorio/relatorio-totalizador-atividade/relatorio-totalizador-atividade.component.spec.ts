import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioTotalizadorAtividadeComponent } from './relatorio-totalizador-atividade.component';

describe('RelatorioTotalizadorAtividadeComponent', () => {
  let component: RelatorioTotalizadorAtividadeComponent;
  let fixture: ComponentFixture<RelatorioTotalizadorAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioTotalizadorAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioTotalizadorAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
