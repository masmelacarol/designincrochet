import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ProductsModule } from '../products/products.module';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule,
    MaterialDesignModule,
  ],
  exports: [],
})
export class HomeModule {}
