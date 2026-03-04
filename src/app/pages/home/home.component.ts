import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { BestSellersComponent } from '../../components/best-sellers/best-sellers.component';
import { InstagramSectionComponent } from '../../components/instagram-section/instagram-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    CategoriesComponent,
    BestSellersComponent,
    InstagramSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
