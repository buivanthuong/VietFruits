import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';
import { IToastrService } from '../../../services/toastr.service';
import { ProductService } from "../../../services/product.service";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  product: Product[]
  tongCong = 0

  constructor(public productService: ProductService, private toastrService: IToastrService) { }

  ngOnInit() {
    this.product = [];
    this.getProductCart()
  }

  getProductCart(){
    this.productService.products.forEach(element => {
      if(element.buy){
        this.product.push(element);
        this.tongCong += Number(element.price)
        console.log(element.title)
      }
      console.log(element.title)

    });
  }


}
