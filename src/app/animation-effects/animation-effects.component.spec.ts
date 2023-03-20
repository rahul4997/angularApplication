import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationEffectsComponent } from './animation-effects.component';

describe('AnimationEffectsComponent', () => {
  let component: AnimationEffectsComponent;
  let fixture: ComponentFixture<AnimationEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
