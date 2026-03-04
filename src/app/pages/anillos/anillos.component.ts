import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-anillos',
  imports: [CommonModule, RouterLink],
  templateUrl: './anillos.component.html',
  styleUrl: './anillos.component.scss'
})
export class AnillosComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProductsByCategory('Anillos');
  }
}
