import { Injectable } from '@angular/core';
import { Product } from '@core/models/model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();
  constructor() {}

  addCart(product: Product): void {
    const itExist = this.products.find((item) => {
      return item['_id'] === product['_id'] && item.size === product.size;
    });
    if (!itExist) {
      this.products.push({ ...product, count: 1 });
    } else {
      itExist.count += 1;
    }
    this.cart.next(this.products);
  }

  deleteCart(product: Product): void {
    const itExist = this.products.find((item) => {
      return item['_id'] === product['_id'] && item.size === product.size;
    });
    if (itExist.count <= 1) {
      const productDelete = this.products.findIndex(
        (item) => item['_id'] === product['_id'] && item.size === product.size
      );
      this.products.splice(productDelete, 1);
    } else {
      itExist.count -= 1;
    }
    this.cart.next(this.products);
  }
}
