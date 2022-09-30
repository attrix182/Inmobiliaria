import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSectionComponent } from './private/pages/admin-section/admin-section.component';
import { HomeComponent } from './public/pages/home/home.component';
import { Home360Component } from './public/pages/home360/home360.component';
import { PropertiesComponent } from './public/pages/properties/properties.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: Home360Component },
  {path: 'admin', component: AdminSectionComponent},
  {path: 'properties', component: PropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
