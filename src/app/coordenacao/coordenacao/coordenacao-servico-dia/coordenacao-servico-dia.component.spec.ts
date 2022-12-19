import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoServicoDiaComponent } from './coordenacao-servico-dia.component';

describe('CoordenacaoServicoDiaComponent', () => {
  let component: CoordenacaoServicoDiaComponent;
  let fixture: ComponentFixture<CoordenacaoServicoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoServicoDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoServicoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
