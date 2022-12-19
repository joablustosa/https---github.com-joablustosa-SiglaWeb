import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioLiberacaoComponent } from './relatorio-liberacao.component';

describe('RelatorioLiberacaoComponent', () => {
  let component: RelatorioLiberacaoComponent;
  let fixture: ComponentFixture<RelatorioLiberacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioLiberacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioLiberacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
