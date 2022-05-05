import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnStepsComponent } from './return-steps.component';

describe('ReturnStepsComponent', () => {
  let component: ReturnStepsComponent;
  let fixture: ComponentFixture<ReturnStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
