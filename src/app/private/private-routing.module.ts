import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../public/pages/home/home.component';
import { AuthGuard } from '../shared/authguard.guard';
import { AdminSectionComponent } from './pages/admin-section/admin-section.component';
import { AdminPropertiesPageComponent } from './pages/admin-section/sections/admin-properties/admin-properties-page/admin-properties-page.component';


const routes: Routes = [
  {path:'', component: AdminSectionComponent,  canActivate: [AuthGuard]},
  {path:'**', component: AdminSectionComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
