import { Injectable, signal, computed } from '@angular/core';
import { Product } from './products.service';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Estado del carrito usando signals
  private cartItems = signal<CartItem[]>([]);
  
  // Computados
  items = computed(() => this.cartItems());
  totalItems = computed(() => 
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );
  subtotal = computed(() => 
    this.cartItems().reduce((total, item) => {
      const price = parseFloat(item.product.price.replace('$', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0)
  );
  
  constructor() {
    // Cargar carrito del localStorage al iniciar
    this.loadCart();
  }

  /**
   * Añade un producto al carrito
   */
  addToCart(product: Product, quantity: number, selectedColor: number) {
    const currentItems = this.cartItems();
    const existingItemIndex = currentItems.findIndex(
      item => item.product.id === product.id && item.selectedColor === selectedColor
    );

    if (existingItemIndex > -1) {
      // Si el producto ya existe con el mismo color, incrementar cantidad
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex].quantity += quantity;
      this.cartItems.set(updatedItems);
    } else {
      // Si no existe, agregar nuevo item
      this.cartItems.set([...currentItems, { product, quantity, selectedColor }]);
    }

    this.saveCart();
  }

  /**
   * Elimina un item del carrito
   */
  removeItem(index: number) {
    const currentItems = this.cartItems();
    this.cartItems.set(currentItems.filter((_, i) => i !== index));
    this.saveCart();
  }

  /**
   * Actualiza la cantidad de un item
   */
  updateQuantity(index: number, quantity: number) {
    if (quantity < 1) return;
    
    const currentItems = this.cartItems();
    const updatedItems = [...currentItems];
    updatedItems[index].quantity = quantity;
    this.cartItems.set(updatedItems);
    this.saveCart();
  }

  /**
   * Vacía el carrito
   */
  clearCart() {
    this.cartItems.set([]);
    this.saveCart();
  }

  /**
   * Guarda el carrito en localStorage
   */
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

  /**
   * Carga el carrito desde localStorage
   */
  private loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        this.cartItems.set(JSON.parse(saved));
      } catch (e) {
        console.error('Error al cargar carrito:', e);
      }
    }
  }
}
