import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  declarations: [DetailsComponent, CategoriesComponent, CardsComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [CardsComponent],
})
export class ProductsModule {}
