import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEffectsComponent } from './button-effects.component';

describe('ButtonEffectsComponent', () => {
  let component: ButtonEffectsComponent;
  let fixture: ComponentFixture<ButtonEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
