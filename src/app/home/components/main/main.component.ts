import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Product[];
  colorFigure;
  constructor(private productsServices: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsServices.getAllProducts();
  }
}
