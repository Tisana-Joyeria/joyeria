import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-sellers',
  imports: [CommonModule, RouterLink],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss'
})
export class BestSellersComponent {
  products = [
    {
      id: 3,  // Anillo Mini Aro
      name: 'Anillo Mini Aro',
      price: '$ 270.00',
      image: 'images/anillos/anillo3.jpg',
      colors: ['#d4af37', '#c0c0c0']
    },
    {
      id: 102,  // Aretes Bela
      name: 'Aretes Bela',
      price: '$ 230.00',
      image: 'images/aretes/arete2.jpg',
      colors: ['#d4af37', '#c0c0c0']
    },
    {
      id: 201,  
      name: 'Collar Rapsodia',
      price: '$ 360.00',
      image: 'images/collares/collar1.jpg',
      colors: ['#d4af37', '#c0c0c0']
    },
    {
      id: 202, 
      name: 'Collar Tasha',
      price: '$ 270.00',
      image: 'images/collares/collar2.jpg',
      colors: ['#d4af37', '#c0c0c0']
    }
  ];
}
