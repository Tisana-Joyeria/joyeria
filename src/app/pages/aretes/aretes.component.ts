import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-aretes',
  imports: [CommonModule, RouterLink],
  templateUrl: './aretes.component.html',
  styleUrl: './aretes.component.scss'
})
export class AretesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProductsByCategory('Aretes');
  }
}
