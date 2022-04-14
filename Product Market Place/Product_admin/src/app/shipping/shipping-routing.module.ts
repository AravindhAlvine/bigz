import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShippingSettingComponent } from './shipping-setting/shipping-setting.component';
import { ShippingMethodsComponent } from './shipping-methods/shipping-methods.component';
import { EditShippingMethodsComponent } from './edit-shipping-methods/edit-shipping-methods.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'shipping-setting', },
      { path: 'shipping-setting', component: ShippingSettingComponent, },
      { path: 'shipping-method', component: ShippingMethodsComponent, },
      { path: 'edit-shipping-method', component: EditShippingMethodsComponent, },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule { }
