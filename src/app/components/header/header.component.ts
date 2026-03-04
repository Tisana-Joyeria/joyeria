import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService, Product } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isSearchOpen = false;
  searchQuery = '';
  searchResults: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {}
  
  // Contador de items del carrito
  get cartItemCount() { 
    return this.cartService.totalItems; 
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      this.searchQuery = '';
      this.searchResults = [];
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  }

  closeSearch() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }

  onSearchInput() {
    if (this.searchQuery.trim()) {
      this.searchResults = this.productsService.searchProducts(this.searchQuery);
    } else {
      this.searchResults = [];
    }
  }

  goToProduct(id: number) {
    this.closeSearch();
  }

  goToCart() {
    this.router.navigate(['/carrito']);
  }
}
