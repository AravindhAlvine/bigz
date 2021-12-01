import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { WebSettingsComponent } from './general-settings/web-settings/web-settings.component';

// sub web setting 
import { LogoSettingsComponent } from './general-settings/web-settings/logo-settings/logo-settings.component';
import { SeoSettingsComponent } from './general-settings/web-settings/seo-settings/seo-settings.component';
import { SocialMediaSettingsComponent } from './general-settings/web-settings/social-media-settings/social-media-settings.component';
import { StoreInfoSettingsComponent } from './general-settings/web-settings/store-info-settings/store-info-settings.component';




const routes: Routes = [
  {
    path: '', data: { title: 'Settings' },
    children: [
      { path: '', redirectTo: 'web', pathMatch: 'full' },
      {
        path: 'web', component: WebSettingsComponent, data: { title: 'Web Settings' },
        children: [
          { path: '', redirectTo: 'store', pathMatch: 'full' },
          { path: 'logo', component: LogoSettingsComponent, pathMatch: 'full', data: { title: 'Web Settings' }, },
          { path: 'seo', component: SeoSettingsComponent, pathMatch: 'full', data: { title: 'Web Settings' }, },
          { path: 'social', component: SocialMediaSettingsComponent, pathMatch: 'full', data: { title: 'Web Settings' }, },
          { path: 'store', component: StoreInfoSettingsComponent, pathMatch: 'full', data: { title: 'Web Settings' }, },


        ]
      },
      { path: 'create-user', component: CreateUserComponent, data: { title: 'Create User' } },
      { path: 'manage-user', component: ManageUserComponent, data: { title: 'Create User' } },
      { path: 'create-role', component: CreateRoleComponent, data: { title: 'Create Role Setting' } },
      { path: 'manage-role', component: ManageRoleComponent, data: { title: 'Manage Role Setting' } },
      { path: 'update-role/:id', component: CreateRoleComponent, data: { title: 'Update Role' } },
      { path: 'update-user/:id', component: CreateUserComponent, data: { title: 'Update User' } }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
