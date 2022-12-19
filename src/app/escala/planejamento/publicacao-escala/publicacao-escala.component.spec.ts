import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacaoEscalaComponent } from './publicacao-escala.component';

describe('PublicacaoEscalaComponent', () => {
  let component: PublicacaoEscalaComponent;
  let fixture: ComponentFixture<PublicacaoEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacaoEscalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacaoEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
