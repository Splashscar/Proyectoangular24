import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mouseenter } from './mouseenter';

describe('Mouseenter', () => {
  let component: Mouseenter;
  let fixture: ComponentFixture<Mouseenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mouseenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mouseenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
