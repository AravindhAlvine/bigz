import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewaySettingComponent } from './payment-gateway-setting.component';

describe('PaymentGatewaySettingComponent', () => {
  let component: PaymentGatewaySettingComponent;
  let fixture: ComponentFixture<PaymentGatewaySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentGatewaySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGatewaySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
