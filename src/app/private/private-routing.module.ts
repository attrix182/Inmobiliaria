import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/authguard.guard';
import { AdminSectionComponent } from './pages/admin-section/admin-section.component';

const routes: Routes = [
  { path: '', component: AdminSectionComponent, canActivate: [AuthGuard] },
  { path: '**', component: AdminSectionComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
