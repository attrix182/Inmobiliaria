import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPropertiesPageComponent } from '../private/pages/admin-section/sections/admin-properties/admin-properties-page/admin-properties-page.component';
import { AuthGuard } from '../shared/authguard.guard';
import { Home360Component } from './pages/home360/home360.component';
import { LoginComponent } from './pages/login/login.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { SellPageComponent } from './pages/sell-page/sell-page.component';

const routes: Routes = [
  { path: '', component: Home360Component },
  { path: 'admin/propiedad/:id', component: AdminPropertiesPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vender', component: SellPageComponent },
  { path: 'propiedades', component: PropertiesComponent },
  { path: 'propiedad/:id', component: PropertyDetailsComponent },
  {
    path: 'admin',
    loadChildren: () => import('../private/private.module').then((m) => m.PrivateModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
