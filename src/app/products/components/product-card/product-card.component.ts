import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  addCart(): void {
    this.cartService.addCart(this.productCart);
  }

  getSize(e): void {
    const value = e.target.value;
    this.productCart = {
      ...this.product,
      size: value,
    };
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      size: ['', [Validators.required]],
    });
  }
}
