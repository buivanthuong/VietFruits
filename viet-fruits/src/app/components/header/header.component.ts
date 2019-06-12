import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { IToastrService } from '../../services/toastr.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(    private toastrService: IToastrService,
    public productService: ProductService) { }

  ngOnInit() {
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
  @ViewChild('search') search:ElementRef;

  setText(){
    this.productService.search = this.search.nativeElement.value
    console.log(this.productService.search)
  }
}
