import { Injectable } from '@angular/core';
import { Product } from '../../models/model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      name: 'Vestido de baño en crochet',
      price: 90000,
      description:
        'Vestido de baño entero con copas protectoras, escote tipo V, cargaderas graduables y funcionales en espalda, drapeado en frente, corte en glúteos tipo panty, forro suave al tacto, hecho a mano en crochet.',
      color: ['#A5711B', '#104B3C'],
      size: ['M', 'L'],
      images: ['assets/images/dress_1.png'],
      category: 'swimsuit',
    },
    {
      id: '2',
      name: 'Vestido de baño en crochet',
      price: 70000,
      description:
        'Vestido de dos piezas con copas protectoras, cargaderas graduables y ajustables en el cuello y en espalda. Corte en glúteos tipo tanga, forro suave al tacto, hecho a mano en crochet.',
      color: ['#471419'],
      size: ['S'],
      images: ['assets/images/dress_2.png'],
      category: 'swimsuit',
    },
    {
      id: '3',
      name: 'Gorro en crochet',
      price: 50000,
      description: 'Gorro hecho a mano en crochet.',
      color: ['#EB2B16'],
      size: ['Unica'],
      images: ['assets/images/hat_1.png'],
      category: 'hat',
    },
    {
      id: '5',
      name: 'Gorro/bufanda en crochet',
      price: 70000,
      description: 'Gorro y bufanda hechos a mano en crochet.',
      color: ['#E883AB'],
      size: ['Unica'],
      images: ['assets/images/scarf_1.png'],
      category: 'scarf',
    },
  ];

  constructor() {}
  getAllProducts(): Product[] {
    return this.products;
  }
}
