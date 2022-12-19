import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexaoChaveComponent } from './conexao-chave.component';

describe('ConexaoChaveComponent', () => {
  let component: ConexaoChaveComponent;
  let fixture: ComponentFixture<ConexaoChaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexaoChaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexaoChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
