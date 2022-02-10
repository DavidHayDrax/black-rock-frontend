import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../../interfaces/Product'
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    size: '',
    category: '',
    imageURL: ''
  };

  edit: boolean = false;

  constructor(private productService: ProductService,
    private router : Router,
    private activatedRoute: ActivatedRoute) { }

    products: Product[] =[];
    
  ngOnInit(){
    const params= this.activatedRoute.snapshot.params;
    console.log(params);
    if(params){
      this.productService.getProduct(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.product=res;
          this.edit=true;
        }
      )
    }
  }

  submitProduct(){
    this.productService.createProduct(this.product)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/']);
    },
      err => console.log(err)
    )
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
