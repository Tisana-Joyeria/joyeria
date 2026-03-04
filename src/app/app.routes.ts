import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { SegundoDropComponent } from './pages/segundo-drop/segundo-drop.component';
import { RebajasComponent } from './pages/rebajas/rebajas.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { AnillosComponent } from './pages/anillos/anillos.component';
import { AretesComponent } from './pages/aretes/aretes.component';
import { PulserasComponent } from './pages/pulseras/pulseras.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'segundo-drop', component: SegundoDropComponent },
  { path: 'rebajas', component: RebajasComponent },
  { path: 'collares', component: CollaresComponent },
  { path: 'anillos', component: AnillosComponent },
  { path: 'aretes', component: AretesComponent },
  { path: 'pulseras', component: PulserasComponent },
  { path: 'producto/:id', component: ProductDetailComponent },
  { path: 'carrito', component: CartComponent },
  { path: '**', redirectTo: '' }
];
