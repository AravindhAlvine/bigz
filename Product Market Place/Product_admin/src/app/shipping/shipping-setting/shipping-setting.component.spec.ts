import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSettingComponent } from './shipping-setting.component';

describe('ShippingSettingComponent', () => {
  let component: ShippingSettingComponent;
  let fixture: ComponentFixture<ShippingSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
