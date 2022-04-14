import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAccountComponent } from './profile-account/profile-account.component';

const routes: Routes = [

  { path: '', redirectTo: 'profile', },
  { path: 'profile', component: ProfileAccountComponent, },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
