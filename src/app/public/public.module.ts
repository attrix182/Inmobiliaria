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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageCompressService } from 'ngx-image-compress';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { SellFormComponent } from './pages/sell-page/sell-form/sell-form.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    Home360Component,
    HomeComponent,
    HomeVideoComponent,
    NavbarComponent,
    LoginComponent,
    SearchComponent,
    PropertiesComponent,
    PropertyDetailsComponent,
    SellPageComponent,
    SellFormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxSkeletonLoaderModule
  ],
  providers: [NgxImageCompressService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PublicModule {}
