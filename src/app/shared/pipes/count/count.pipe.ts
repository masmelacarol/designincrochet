import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@core/models/model';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  products: Product[] = [];
  transform(value: Product[]): Product[] {
    value.forEach((product) => {
      const itExist = this.products.find((item) => {
        // tslint:disable-next-line:no-string-literal
        return item['_id'] === product['_id'];
      });
      if (!itExist) {
        this.products.push({ ...product, count: 1 });
      } else {
        itExist.count += 1;
      }
    });

    this.products = [...this.products];
    return this.products;
  }
}
