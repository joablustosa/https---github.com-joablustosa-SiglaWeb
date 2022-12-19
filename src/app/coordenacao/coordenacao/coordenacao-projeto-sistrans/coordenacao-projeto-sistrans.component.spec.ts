import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoProjetoSistransComponent } from './coordenacao-projeto-sistrans.component';

describe('CoordenacaoProjetoSistransComponent', () => {
  let component: CoordenacaoProjetoSistransComponent;
  let fixture: ComponentFixture<CoordenacaoProjetoSistransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoProjetoSistransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoProjetoSistransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
