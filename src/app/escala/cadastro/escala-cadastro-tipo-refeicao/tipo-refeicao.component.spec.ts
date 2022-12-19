import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRefeicaoComponent } from './tipo-refeicao.component';

describe('TipoRefeicaoComponent', () => {
  let component: TipoRefeicaoComponent;
  let fixture: ComponentFixture<TipoRefeicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoRefeicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
