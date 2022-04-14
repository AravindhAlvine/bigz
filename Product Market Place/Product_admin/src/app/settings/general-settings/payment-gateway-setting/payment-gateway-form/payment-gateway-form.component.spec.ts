import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewayFormComponent } from './payment-gateway-form.component';

describe('PaymentGatewayFormComponent', () => {
  let component: PaymentGatewayFormComponent;
  let fixture: ComponentFixture<PaymentGatewayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentGatewayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGatewayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
