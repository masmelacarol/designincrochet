import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() sliceSize: number;
  @Input() isCard: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
