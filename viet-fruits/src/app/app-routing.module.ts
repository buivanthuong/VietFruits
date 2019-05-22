import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'src/app/container/cart/cart.component';
import { PaymentComponent } from 'src/app/container/payment/payment.component';
import { ContainerComponent } from 'src/app/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContainerComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
