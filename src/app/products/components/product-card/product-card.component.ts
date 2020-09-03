import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '@core/services/cart/cart.service';
import { Product } from 'src/app/core/models/model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() sliceSize: number;
  @Input() isCard = false;
  productCart: Product;
  size: FormControl;
  constructor(private cartService: CartService) {
    this.size = new FormControl('');
    this.size.valueChanges.subscribe((value) => {
      this.productCart = {
        ...this.product,
        size: value,
      };
    });
  }

  ngOnInit(): void {}

  addCart(): void {
    this.cartService.addCart(this.productCart);
  }
}
