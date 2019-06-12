import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { IToastrService } from '../../../../services/toastr.service';
import { ProductService } from "../../../../services/product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() p: Product;

  constructor( public productService: ProductService, private toastrService: IToastrService) {
    
   }

  ngOnInit() {
  }
  public clickBuy(p:Product) {
    this.toastrService.showSuccess("Đã thêm vào giỏ hàng, vui lòng tới giỏ hàng để thanh toán" , p.title);
    this.productService.products.forEach(element => {
      if(element.id == p.id){
        element.number="1";
        element.buy = true
        this.productService.upCountCart();
      }
    });
  }
  public clickLike(p:Product) {
    this.toastrService.showSuccess("Sản phẩm yêu thích " , p.title);
  }
}
