import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  declarations: [DetailsComponent, CategoriesComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
