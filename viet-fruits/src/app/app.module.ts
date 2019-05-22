import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { MenuLeftComponent } from './container/menu-left/menu-left.component';
import { ContentComponent } from './container/content/content.component';
import { SearchComponent } from './container/search/search.component';
import { CartComponent } from './container/cart/cart.component';
import { PaymentComponent } from './container/payment/payment.component';
import { ProductItemComponent } from './container/product/product-item/product-item.component';
import { ProductDetailComponent } from './container/product/product-detail/product-detail.component';
import { ProductCartComponent } from './container/product/product-cart/product-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    MenuLeftComponent,
    ContentComponent,
    SearchComponent,
    CartComponent,
    PaymentComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
