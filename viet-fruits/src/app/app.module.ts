import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuLeftComponent } from './components/container/menu-left/menu-left.component';
import { ContentComponent } from './components/container/content/content.component';
import { SearchComponent } from './components/container/search/search.component';
import { CartComponent } from './components/container/cart/cart.component';
import { PaymentComponent } from './components/container/payment/payment.component';
import { ProductItemComponent } from './components/container/product/product-item/product-item.component';
import { ProductDetailComponent } from './components/container/product/product-detail/product-detail.component';
import { ProductCartComponent } from './components/container/product/product-cart/product-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductService } from './services/product.service';

import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { SliderComponent } from './components/header/slider/slider.component';
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
    ProductCartComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
