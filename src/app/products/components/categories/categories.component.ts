import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];
  categories: Array<string> = [];
  itemCategories: Object = {};
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
    this.getProductByCategory();
  }

  getCategory(): Array<string> {
    const category = this.products.map((item) => item.category);
    return category;
  }

  filterByCategory(category): Object {
    const filterCategories = {};
    for (const item of category) {
      filterCategories[item] = this.products.filter(
        (element) => element.category === item
      );
    }
    return filterCategories;
  }

  getProductByCategory(): void {
    const category = this.getCategory();
    const filter = this.filterByCategory(category);
    this.categories = Object.keys(filter);
    this.itemCategories = filter;
  }
}
