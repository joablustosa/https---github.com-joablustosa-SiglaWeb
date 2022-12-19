import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacaoJornadaPrevistaComponent } from './comparacao-jornada-prevista.component';

describe('ComparacaoJornadaPrevistaComponent', () => {
  let component: ComparacaoJornadaPrevistaComponent;
  let fixture: ComponentFixture<ComparacaoJornadaPrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparacaoJornadaPrevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparacaoJornadaPrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
