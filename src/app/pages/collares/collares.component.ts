import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-collares',
  imports: [CommonModule, RouterLink],
  templateUrl: './collares.component.html',
  styleUrl: './collares.component.scss'
})
export class CollaresComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProductsByCategory('Collares');
  }
}
