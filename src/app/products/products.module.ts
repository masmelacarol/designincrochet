import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  declarations: [
    DetailsComponent,
    CategoriesComponent,
    CommentsComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductCardComponent],
})
export class ProductsModule {}
