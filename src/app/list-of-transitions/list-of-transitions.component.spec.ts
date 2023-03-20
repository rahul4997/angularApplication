import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTransitionsComponent } from './list-of-transitions.component';

describe('ListOfTransitionsComponent', () => {
  let component: ListOfTransitionsComponent;
  let fixture: ComponentFixture<ListOfTransitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTransitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
