import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '@material-design/material-design.module';
import { StarRatingModule } from 'angular-star-rating';
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
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialDesignModule,
    StarRatingModule.forRoot(),
  ],
  exports: [ProductCardComponent],
})
export class ProductsModule {}
