import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ShippingRoutingModule } from './shipping-routing.module';

import { ShippingMethodsComponent } from './shipping-methods/shipping-methods.component';
import { EditShippingMethodsComponent } from './edit-shipping-methods/edit-shipping-methods.component';
import { ShippingSettingComponent } from './shipping-setting/shipping-setting.component';


@NgModule({
  declarations: [
    ShippingMethodsComponent,
    ShippingSettingComponent,
    EditShippingMethodsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShippingRoutingModule
  ]
})
export class ShippingModule { }
