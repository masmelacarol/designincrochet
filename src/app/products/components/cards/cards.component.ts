import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() category;

  constructor() {
    console.log('CardsComponent -> category', this.category);
  }

  ngOnInit(): void {}
}
