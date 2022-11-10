import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PropertyCardComponent } from './components/property-card/property-card.component';

const components = [PropertyCardComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    NgxSkeletonLoaderModule
  ],
  exports: [...components]
})
export class SharedModule {}
