import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { IToastrService } from '../../../../services/toastr.service';
import { ProductService } from "../../../../services/product.service";
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

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

  resetOrder(){
    this.productService.products.forEach(element => {
      element.buy = false
    });
    this.productService.upCountCart();
    this.toastrService.showSuccess("Đơn hàng của bạn đã được xác nhận vui lòng giữ liên lạc chúng tôi sẽ liên hệ lại với bạn! " , "Đặt đơn hàng thành công");

  }
}
