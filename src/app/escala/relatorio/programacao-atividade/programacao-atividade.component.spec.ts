import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacaoAtividadeComponent } from './programacao-atividade.component';

describe('ProgramacaoAtividadeComponent', () => {
  let component: ProgramacaoAtividadeComponent;
  let fixture: ComponentFixture<ProgramacaoAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacaoAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacaoAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
