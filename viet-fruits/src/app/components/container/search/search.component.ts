import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductService } from "../../../services/product.service";
import { Product } from '../../../models/product';
import { IToastrService } from '../../../services/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  product: Product[];
  searchItem : string;
  artists:any = [];
  avgStars : string;
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
    this.product = []
    this.productService.products.forEach(element => {
        if(element.title.indexOf(this.productService.search) >= 0  || this.productService.search == ""){
          this.product.push(element)
          console.log("avvd")
        }
    });;
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
