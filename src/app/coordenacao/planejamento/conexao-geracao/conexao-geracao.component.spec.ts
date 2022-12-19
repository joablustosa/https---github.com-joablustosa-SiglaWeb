import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexaoGeracaoComponent } from './conexao-geracao.component';

describe('ConexaoGeracaoComponent', () => {
  let component: ConexaoGeracaoComponent;
  let fixture: ComponentFixture<ConexaoGeracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexaoGeracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexaoGeracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
