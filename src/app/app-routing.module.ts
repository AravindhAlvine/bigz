import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';
import { HomeComponent } from './layout/home/home.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    canActivate: [AuthGuard],
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashoard/dashoard.module').then(m => m.DashoardModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./main-categories/main-categories.module').then(m => m.MainCategoriesModule)
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'vendors',
        loadChildren: () => import('./hair-stylists/hair-stylists.module').then(m => m.HairStylistsModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'bookings',
        loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'review',
        loadChildren: () => import('./review/review.module').then(m => m.ReviewModule)
      },
      {
        path: 'cms',
        loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
