import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  // ========== ANILLOS (IDs: 1-99) ==========
  private anillos: Product[] = [
    {
      id: 1,
      name: 'Anillo Sofia',
      price: '$ 250.00',
      image: '/images/anillos/anillo1.jpg',
      colors: ['#d4af37', '#c0c0c0'],
      category: 'Anillos'
    },
    {
      id: 2,
      name: 'Anillo Diana',
      price: '$ 280.00',
      image: '/images/anillos/anillo2.jpg',
      colors: ['#d4af37', '#c0c0c0'],
      category: 'Anillos'
    },
    {
      id: 3,
      name: 'Anillo Camila',
      price: '$ 290.00',
      image: '/images/anillos/anillo3.jpg',
      colors: ['#c0c0c0'],
      category: 'Anillos'
    }
  ];

  // ========== ARETES (IDs: 100-199) ==========
  private aretes: Product[] = [
    {
      id: 100,
      name: 'Aretes Luna',
      price: '$ 180.00',
      image: '/images/aretes/arete.jpg',
      colors: ['#d4af37'],
      category: 'Aretes'
    },
    {
      id: 101,
      name: 'Aretes Carolina',
      price: '$ 200.00',
      image: '/images/aretes/arete1.jpg',
      colors: ['#c0c0c0'],
      category: 'Aretes'
    },
    {
      id: 102,
      name: 'Aretes Valeria',
      price: '$ 190.00',
      image: '/images/aretes/arete2.jpg',
      colors: ['#d4af37', '#c0c0c0'],
      category: 'Aretes'
    }
  ];

  // ========== COLLARES (IDs: 200-299) ==========
  private collares: Product[] = [
    {
      id: 200,
      name: 'Collar Martina',
      price: '$ 300.00',
      image: '/images/collares/collar.jpg',
      colors: ['#d4af37', '#c0c0c0'],
      category: 'Collares'
    },
    {
      id: 201,
      name: 'Collar Victoria',
      price: '$ 350.00',
      image: '/images/collares/collar1.jpg',
      colors: ['#d4af37'],
      category: 'Collares'
    },
    {
      id: 202,
      name: 'Collar Isabella',
      price: '$ 380.00',
      image: '/images/collares/collar2.jpg',
      colors: ['#d4af37'],
      category: 'Collares'
    }
  ];

  // ========== PULSERAS (IDs: 300-399) ==========
  private pulseras: Product[] = [
    {
      id: 300,
      name: 'Pulsera Elena',
      price: '$ 220.00',
      image: '/images/pulseras/pulsera.jpg',
      colors: ['#d4af37', '#c0c0c0'],
      category: 'Pulseras'
    },
    {
      id: 301,
      name: 'Pulsera Valentina',
      price: '$ 240.00',
      image: '/images/pulseras/pulsera1.jpg',
      colors: ['#d4af37', '#c0c0c0'],
      category: 'Pulseras'
    },
    {
      id: 302,
      name: 'Pulsera Natalia',
      price: '$ 230.00',
      image: '/images/pulseras/pulsera2.jpg',
      colors: ['#d4af37'],
      category: 'Pulseras'
    }
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return [...this.anillos, ...this.aretes, ...this.collares, ...this.pulseras];
  }

  getProductsByCategory(category: string): Product[] {
    const cat = category.toLowerCase();
    switch(cat) {
      case 'anillos':
        return this.anillos;
      case 'aretes':
        return this.aretes;
      case 'collares':
        return this.collares;
      case 'pulseras':
        return this.pulseras;
      default:
        return [];
    }
  }

  searchProducts(query: string): Product[] {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) {
      return this.getAllProducts();
    }
    return this.getAllProducts().filter(p => 
      p.name.toLowerCase().includes(searchTerm) || 
      p.category.toLowerCase().includes(searchTerm)
    );
  }

  getProductById(id: number): Product | undefined {
    return this.getAllProducts().find(p => p.id === id);
  }
}
