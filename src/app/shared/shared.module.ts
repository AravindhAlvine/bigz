import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './modules/thired-party/prime-ng/prime-ng.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
@NgModule({
  declarations: [
    TreeViewComponent,
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    NgxIntlTelInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TreeViewComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
}
