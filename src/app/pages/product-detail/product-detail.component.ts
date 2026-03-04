import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  quantity = 1;
  selectedColor = 0;
  relatedProducts: Product[] = [];
  expandedSection: string | null = null;
  showAddedMessage = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productsService.getProductById(id);
      
      if (this.product) {
        // Obtener productos de categorías complementarias
        this.relatedProducts = this.getComplementaryProducts(this.product);
      } else {
        // Si no se encuentra el producto, redirigir a home
        this.router.navigate(['/']);
      }
    });
  }

  /**
   * Obtiene productos de categorías que complementan el producto actual
   */
  getComplementaryProducts(product: Product): Product[] {
    const complementaryCategories = this.getComplementaryCategories(product.category);
    const allProducts: Product[] = [];

    // Obtener productos de cada categoría complementaria
    complementaryCategories.forEach(category => {
      const categoryProducts = this.productsService.getProductsByCategory(category);
      allProducts.push(...categoryProducts);
    });

    // Mezclar aleatoriamente y tomar 4 productos
    return this.shuffleArray(allProducts).slice(0, 4);
  }

  /**
   * Define qué categorías complementan a cada tipo de producto
   */
  getComplementaryCategories(currentCategory: string): string[] {
    const categoryMap: { [key: string]: string[] } = {
      'Anillos': ['Aretes', 'Collares'],
      'Aretes': ['Collares', 'Pulseras'],
      'Collares': ['Aretes', 'Anillos'],
      'Pulseras': ['Anillos', 'Collares']
    };

    return categoryMap[currentCategory] || [];
  }

  /**
   * Mezcla aleatoriamente un array
   */
  shuffleArray(array: Product[]): Product[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  selectColor(index: number) {
    this.selectedColor = index;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  toggleSection(section: string) {
    this.expandedSection = this.expandedSection === section ? null : section;
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity, this.selectedColor);
      
      // Mostrar mensaje de confirmación
      this.showAddedMessage = true;
      setTimeout(() => {
        this.showAddedMessage = false;
      }, 3000);
      
      // Resetear cantidad
      this.quantity = 1;
    }
  }

  goToProduct(id: number) {
    this.router.navigate(['/producto', id]);
    window.scrollTo(0, 0);
  }
}
