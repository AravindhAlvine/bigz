import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourOrderComponent } from './your-order/your-order.component';
import { ReturnRulesComponent } from './return-rules/return-rules.component';
import { ReturnStepsComponent } from './return-steps/return-steps.component';

const routes: Routes = [

  { path: '', component: YourOrderComponent },
  { path: 'return-rules', component: ReturnRulesComponent },
  { path: 'return-steps', component: ReturnStepsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnItemRoutingModule { }
