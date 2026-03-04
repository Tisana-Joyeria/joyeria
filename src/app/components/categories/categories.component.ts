import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories = [
    {
      name: 'ANILLOS',
      image: '/images/categorias/anillos.jpg',
      route: '/anillos'
    },
    {
      name: 'ARETES & EARCUFFS',
      image: '/images/categorias/aretes.jpg',
      route: '/aretes'
    },
    {
      name: 'COLLARES',
      image: '/images/categorias/collares.jpg',
      route: '/collares'
    },
    {
      name: 'PULSERAS',
      image: '/images/categorias/pulseras.jpg',
      route: '/pulseras'
    }
  ];
}
