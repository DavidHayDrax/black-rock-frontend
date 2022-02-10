import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import {ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[] =[];

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe(
      res => {
        this.products=res;
      },
      err => console.log(err)
      )
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id)
    .subscribe(
      res =>{
        this.getProducts();
      },
      err => console.log(err)
    )
  }


}
