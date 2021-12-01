import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HairStylistsRoutingModule } from './hair-stylists-routing.module';
import { CreateHairStylistComponent } from './create-hair-stylist/create-hair-stylist.component';
import {ManageHairStylistsComponent} from './manage-hair-stylists/manage-hair-stylists.component';
// import { NgbRatingModule } from 'ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { VendorPlansComponent } from './vendor-plans/vendor-plans.component';
import { CreatePlansComponent } from './create-plans/create-plans.component';
import { VendorRequestComponent } from './vendor-request/vendor-request.component';

@NgModule({
  declarations: [
    CreateHairStylistComponent,
    ManageHairStylistsComponent,
    VendorPlansComponent,
    CreatePlansComponent,
    VendorRequestComponent
  ],
  imports: [
    CommonModule,
    HairStylistsRoutingModule,
    // NgbRatingModule,
    SharedModule
  ]
})
export class HairStylistsModule { }
