import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() product;
  @Input() color;
  @Input() size = -1;
  @Input() imageWidth = 200;
  @Input() position = 'flex-start';

  constructor() {
    console.log('CardsComponent -> product', this.product);
  }

  ngOnInit(): void {}
}
