import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexaoExclusaoComponent } from './conexao-exclusao.component';

describe('ConexaoExclusaoComponent', () => {
  let component: ConexaoExclusaoComponent;
  let fixture: ComponentFixture<ConexaoExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexaoExclusaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexaoExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
