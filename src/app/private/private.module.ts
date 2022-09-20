import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSectionComponent } from './pages/admin-section/admin-section.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';



@NgModule({
  declarations: [AdminSectionComponent, AdminSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
