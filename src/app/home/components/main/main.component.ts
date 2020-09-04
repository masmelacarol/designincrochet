import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from '@core/models/model';
import { ProductsService } from '@core/services/products/products.service';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  products: Product[];
  mySwiper: Swiper;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchApi();
  }

  fetchApi(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products.push(products);
    });
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
  }
}
