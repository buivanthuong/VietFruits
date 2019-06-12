import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../../services/product.service";
import { Product } from '../../../../models/product';
import { IToastrService } from '../../../../services/toastr.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products: Product[];
  searchItem : string;
  artists:any = [];
  avgStars : string;
  product: any;
  flag = true;
  constructor(
    public productService: ProductService,
    private toastrService: IToastrService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getProducts();    
  }


  getProducts() {
    this.product = this.productService.products;
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
  
}
