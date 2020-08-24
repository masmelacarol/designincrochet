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
  config = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 3,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 100,
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
    },
  };
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
        renderBullet: (index, className) =>
          '<span class="' + className + '">' + (index + 1) + '</span>',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
