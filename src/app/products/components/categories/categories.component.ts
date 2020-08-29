import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  products: Product[];
  categories: Array<string> = [];
  itemCategories: Object = {};
  constructor(private productsService: ProductsService) {
    this.fetchApi();
  }

  ngOnInit(): void {}

  fetchApi() {
    this.productsService.getAllProducts().subscribe((product) => {
      console.log('CategoriesComponent -> fetchApi -> product', product);
      this.products = product;
      this.getProductByCategory();
    });
  }

  getCategory() {
    if (this.products) {
      const category = this.products.map((item) => item.category);
      console.log('CategoriesComponent -> getCategory -> category', category);
      return category;
    }
    console.log('this.products', this.products);
  }

  filterByCategory(category): Object {
    const filterCategories = {};
    for (const item of category) {
      filterCategories[item] = this.products.filter(
        (element) => element.category === item
      );
    }
    console.log(this.products);
    return filterCategories;
  }

  getProductByCategory(): void {
    const category = this.getCategory();
    const filter = this.filterByCategory(category);
    this.categories = Object.keys(filter);
    this.itemCategories = filter;
  }
}
