import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/models/model';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products$: Observable<Product[]>;
  form: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
    // this.getTotal();
  }

  // getTotal() {
  //   let count = this.form.get('count');
  //   console.log('CartComponent -> getTotal -> count', count);
  // }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      count: [1, [Validators.required]],
    });
  }
}
