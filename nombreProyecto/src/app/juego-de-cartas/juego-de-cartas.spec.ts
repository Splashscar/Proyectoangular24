import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDeCartas } from './juego-de-cartas';

describe('JuegoDeCartas', () => {
  let component: JuegoDeCartas;
  let fixture: ComponentFixture<JuegoDeCartas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoDeCartas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoDeCartas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
