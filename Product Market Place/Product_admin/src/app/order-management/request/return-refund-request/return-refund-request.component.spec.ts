import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRefundRequestComponent } from './return-refund-request.component';

describe('ReturnRefundRequestComponent', () => {
  let component: ReturnRefundRequestComponent;
  let fixture: ComponentFixture<ReturnRefundRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnRefundRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRefundRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
