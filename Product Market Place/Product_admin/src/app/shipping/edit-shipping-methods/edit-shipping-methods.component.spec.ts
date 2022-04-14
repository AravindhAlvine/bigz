import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShippingMethodsComponent } from './edit-shipping-methods.component';

describe('EditShippingMethodsComponent', () => {
  let component: EditShippingMethodsComponent;
  let fixture: ComponentFixture<EditShippingMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShippingMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShippingMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
