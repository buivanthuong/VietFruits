import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { IToastrService } from '../../../services/toastr.service';
import { ProductService } from "../../../services/product.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product: Product[]
  tongCong = 0

  constructor(public productService: ProductService, private toastrService: IToastrService) { }
  
  ngOnInit() {
    this.product = [];
    this.getProductCart()
  }
  checkProduct(){
    var i = 0;
    this.productService.products.forEach(element => {
      if(element.buy){
        i++;
      }
    });
    if(i==0){
      this.toastrService.showFail("Không có sản phẩn nào trong giỏ hàng" , "Đơn hàng trống");
    }
  }
  getProductCart(){
    this.product = [];
    this.productService.products.forEach(element => {
      if(element.buy){
        this.product.push(element);
        this.tongCong += Number(element.price)
        console.log(element.title)
      }
      console.log(element.title)

    });
  }
  xoaSP(p:Product){
      this.productService.products.forEach(element => {
        if(element.id == p.id){
          element.buy = false;
          this.productService.upCountCart();
          this.getProductCart();
        }
      });
  }

}
