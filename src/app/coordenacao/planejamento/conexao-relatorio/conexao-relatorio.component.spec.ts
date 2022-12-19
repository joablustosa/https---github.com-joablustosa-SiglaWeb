import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexaoRelatorioComponent } from './conexao-relatorio.component';

describe('ConexaoRelatorioComponent', () => {
  let component: ConexaoRelatorioComponent;
  let fixture: ComponentFixture<ConexaoRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexaoRelatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexaoRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
