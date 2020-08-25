import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/model';
import Swiper, { Navigation, Pagination } from 'swiper';
import { ProductsService } from '../../../core/services/products/products.service';

Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  products: Product[];
  mySwiper: Swiper;
  constructor(private productsServices: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsServices.getAllProducts();
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      grabCursor: true,
    });
  }
}
