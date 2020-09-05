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
  myInterval: number = 3000;
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;

  constructor(private productsService: ProductsService) {
    this.fetchApi();
  }

  ngOnInit(): void {}

  activeSlideChange() {
    console.log(this.activeSlideIndex);
  }
  fetchApi(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      console.log('MainComponent -> fetchApi -> products', [products]);
      this.products = products;
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
