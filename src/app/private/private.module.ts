import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSectionComponent } from './pages/admin-section/admin-section.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './pages/admin-section/sections/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './pages/admin-section/sections/admin-users/admin-users.component';
import { AdminPropertiesComponent } from './pages/admin-section/sections/admin-properties/admin-properties.component';
import { AdminInboxComponent } from './pages/admin-section/sections/admin-inbox/admin-inbox.component';
import { AdminPreferencesComponent } from './pages/admin-section/sections/admin-preferences/admin-preferences.component';
import { PrivateRoutingModule } from './private-routing.module';



@NgModule({
  declarations: [AdminSectionComponent, AdminSidebarComponent, AdminNavbarComponent, AdminDashboardComponent, AdminUsersComponent, AdminPropertiesComponent, AdminInboxComponent, AdminPreferencesComponent],
  imports: [
    PrivateRoutingModule,
    CommonModule
  ]
})
export class PrivateModule { }
