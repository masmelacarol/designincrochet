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
      theme: 'yellow',
    },
    {
      id: '2',
      name: 'Gorro en crochet',
      price: 50000,
      description:
        'Gorro de punto ligero para primavera, verano y otoño. Diseño único de tejido suelto para crear patrones de punto de ganchillo que añaden estilo instantáneo y transpirabilidad.',
      color: ['#EB2B16'],
      size: ['Unica'],
      images: ['assets/images/hat_1.png'],
      category: 'hat',
      theme: 'pink',
    },
    {
      id: '3',
      name: 'Gorro/bufanda en crochet',
      price: 70000,
      description: 'Gorro y bufanda hechos a mano en crochet.',
      color: ['#E883AB'],
      size: ['Unica'],
      images: ['assets/images/scarf_1.png'],
      category: 'scarf',
      theme: 'pink',
    },
    {
      id: '4',
      name: 'Vestido de baño en crochet',
      price: 70000,
      description:
        'Vestido de dos piezas con copas protectoras, cargaderas graduables y ajustables en el cuello y en espalda. Corte en glúteos tipo tanga, forro suave al tacto, hecho a mano en crochet.',
      color: ['#471419'],
      size: ['S'],
      images: ['assets/images/dress_2.png'],
      category: 'swimsuit',
      theme: 'purple',
    },
    {
      id: '5',
      name: 'Vestido de baño en crochet',
      price: 80000,
      description:
        'Vestido de dos piezas con copas protectoras, tipo strapless ajustable en la espalda. Corte en glúteos tipo panty, forro suave al tacto, hecho a mano en crochet.',
      color: ['#9f6f78', '#088ea0', '#29130d'],
      size: ['S', 'M', 'L', 'XL'],
      images: ['assets/images/dress_4.png'],
      category: 'swimsuit',
      theme: 'pink',
    },
    {
      id: '6',
      name: 'Saco y zapatos de bebe en crochet',
      price: 60000,
      description: 'Saco y zapatos de bebe, hecho a mano en crochet.',
      color: ['#014871', '#9fb7bb'],
      size: ['3', '6'],
      images: ['assets/images/dress_3.png'],
      category: 'coat',
      theme: 'blue',
    },
    {
      id: '7',
      name: 'Ramo de flores en crochet',
      price: 30000,
      description: 'Ramo de flores, hecho a mano en crochet.',
      color: ['#903e01', '#c1bcc2', '#330a13', '#001f0a'],
      size: ['S', 'M'],
      images: ['assets/images/flowers_1.png'],
      category: 'flowers',
      theme: 'purple',
    },
  ];

  constructor() {}
  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id): Product {
    const product = this.products.find((item) => item.id === id);
    return product;
  }
}
