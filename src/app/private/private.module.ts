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
import { AdminPropertiesListComponent } from './pages/admin-section/sections/admin-properties/admin-properties-list/admin-properties-list.component';
import { AdminPropertiesAddComponent } from './pages/admin-section/sections/admin-properties/admin-properties-add/admin-properties-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPropertiesPageComponent } from './pages/admin-section/sections/admin-properties/admin-properties-page/admin-properties-page.component';
import { AdminUsersAddComponent } from './pages/admin-section/sections/admin-users/admin-users-add/admin-users-add.component';
import { AdminUsersListComponent } from './pages/admin-section/sections/admin-users/admin-users-list/admin-users-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageCompressService } from 'ngx-image-compress';

@NgModule({
  declarations: [
    AdminSectionComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminPropertiesComponent,
    AdminInboxComponent,
    AdminPreferencesComponent,
    AdminPropertiesListComponent,
    AdminPropertiesAddComponent,
    AdminPropertiesPageComponent,
    AdminUsersAddComponent,
    AdminUsersListComponent,
  ],
  providers: [NgxImageCompressService],
  imports: [PrivateRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, NgbModule]
})
export class PrivateModule {}
