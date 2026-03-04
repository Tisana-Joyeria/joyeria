import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-pulseras',
  imports: [CommonModule, RouterLink],
  templateUrl: './pulseras.component.html',
  styleUrl: './pulseras.component.scss'
})
export class PulserasComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProductsByCategory('Pulseras');
  }
}
