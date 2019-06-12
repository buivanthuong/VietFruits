import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'src/app/components/container/cart/cart.component';
import { PaymentComponent } from 'src/app/components/container/payment/payment.component';
import { ProductCartComponent } from './components/container/product/product-cart/product-cart.component';
import { SearchComponent } from './components/container/search/search.component';

import { ContainerComponent } from 'src/app/components/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContainerComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-detail', component: ProductCartComponent },
  { path: 'search', component: SearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
