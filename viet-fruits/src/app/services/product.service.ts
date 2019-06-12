import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
	countCart :String
	products : Product[];
	search: string;
	constructor(){
		this.initProducts();
		this.countCart= "";
	}
	
	upCountCart(){
		var a = 0;
		this.products.forEach(element => {
			if(element.buy){
				a+=1
			}
		});
		this.countCart= a + "";
		console.log(a);
	}

	initProducts(){

		//init products
		var product1 : Product = {}
		product1.id = "1";
		product1.price = "55000";
		product1.title = "Bưởi da xanh loại 1";
		product1.image = "buoi.jpg"
		product1.hot = true

		var product2 : Product = {}
		product2.id = "2";
		product2.price = "95000";
		product2.title = "Cam Ai Cập";
		product2.image = "cam.jpg"
		product2.hot = true

		var product3 : Product = {}
		product3.id = "3";
		product3.price = "15000";
		product3.title = "Củ đậu Đà lạt";
		product3.image = "cudau.jpg"
		product3.hot = true
		
		var product4 : Product = {}
		product4.id = "4";
		product4.price = "150000";
		product4.title = "Dâu tây giống New Zealand";
		product4.image = "dau.jpg"
		product4.hot = true

		var product5 : Product = {}
		product5.id = "5";
		product5.price = "20000";
		product5.title = "Dừa tươi miền tây";
		product5.image = "dua.jpg"
		
		var product6 : Product = {}
		product6.id = "6";
		product6.price = "25000";
		product6.title = "Dưa hấu Long an";
		product6.image = "duahau.jpg"

		var product7 : Product = {}
		product7.id = "7";
		product7.price = "30000";
		product7.title = "Đu đủ miền bắc";
		product7.image = "dudu.jpg"
		
		var product8 : Product = {}
		product8.id = "8";
		product8.price = "255000";
		product8.title = "Kiwi nhập khẩu Hàn Quốc";
		product8.image = "kiwi.jpg"
		
		var product9 : Product = {}
		product9.id = "9";
		product9.price = "50000";
		product9.title = "Lựu đỏ đà lạt";
		product9.image = "luu.jpg"
		
		var product10 : Product = {}
		product10.id = "10";
		product10.price = "55000";
		product10.title = "Sầu riêng hạt lép";
		product10.image = "saurieng.jpg"
		
				
		var product11 : Product = {}
		product11.id = "11";
		product11.price = "20000";
		product11.title = "Soài cát hòa lộc";
		product11.image = "soai.jpg"
		
		var product12 : Product = {}
		product12.id = "12";
		product12.price = "10000";
		product12.title = "Thơm miền bắc";
		product12.image = "thom.jpg"

		this.products = [];
		this.products.push(product1);
		this.products.push(product2);
		this.products.push(product3);
		this.products.push(product4);
		this.products.push(product5);
		this.products.push(product6);
		this.products.push(product7);
		this.products.push(product8);
		this.products.push(product9);
		this.products.push(product10);
		this.products.push(product11);
		this.products.push(product12);
	}

}

