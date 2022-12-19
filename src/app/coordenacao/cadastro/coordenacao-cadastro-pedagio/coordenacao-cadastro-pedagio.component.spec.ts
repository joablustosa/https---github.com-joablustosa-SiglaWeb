import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroPedagioComponent } from './coordenacao-cadastro-pedagio.component';

describe('CoordenacaoCadastroPedagioComponent', () => {
  let component: CoordenacaoCadastroPedagioComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroPedagioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroPedagioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroPedagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
