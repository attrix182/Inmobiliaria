import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home360Component } from './pages/home360/home360.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeVideoComponent } from './pages/home/home-video/home-video.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicRoutingModule } from './public.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';


@NgModule({
  declarations: [Home360Component, HomeComponent, HomeVideoComponent, NavbarComponent, LoginComponent, SearchComponent, PropertiesComponent, PropertyDetailsComponent],
  imports: [CommonModule, PublicRoutingModule, ReactiveFormsModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule {}
