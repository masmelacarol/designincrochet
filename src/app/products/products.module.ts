import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductsRoutingModule } from './products.routing.module';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [DetailsComponent, CategoriesComponent, CardsComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
