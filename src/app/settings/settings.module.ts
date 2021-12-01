import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { WebSettingsComponent } from './general-settings/web-settings/web-settings.component';
import { LogoSettingsComponent } from './general-settings/web-settings/logo-settings/logo-settings.component';
import { StoreInfoSettingsComponent } from './general-settings/web-settings/store-info-settings/store-info-settings.component';
import { SeoSettingsComponent } from './general-settings/web-settings/seo-settings/seo-settings.component';
import { SocialMediaSettingsComponent } from './general-settings/web-settings/social-media-settings/social-media-settings.component';


@NgModule({
  declarations: [
    GeneralSettingsComponent,
    CreateUserComponent,
    ManageUserComponent,
    ManageRoleComponent,
    CreateRoleComponent,
    WebSettingsComponent,
    LogoSettingsComponent,
    StoreInfoSettingsComponent,
    SeoSettingsComponent,
    SocialMediaSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
