import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWrapperComponent } from './counter-wrapper.component';

describe('CounterWrapperComponent', () => {
  let component: CounterWrapperComponent;
  let fixture: ComponentFixture<CounterWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
