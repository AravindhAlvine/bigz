import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewiComponent } from './add-reviewi.component';

describe('AddReviewiComponent', () => {
  let component: AddReviewiComponent;
  let fixture: ComponentFixture<AddReviewiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviewiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
