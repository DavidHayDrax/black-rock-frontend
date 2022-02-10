import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Product} from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://localhost:3002';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3002/product');
  }
  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>('http://localhost:3002/product/create',product);
  }
  deleteProduct(id: string): Observable<Product>{
      return this.http.delete<Product>(`http://localhost:3002/product/delete?productID=${id}`);
  }
  updateProduct(id: string, product: Product): Observable<Product>{
    return this.http.put<Product>(`http://localhost:3002/product/update?productID=${id}`, product);
  }
  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`http://localhost:3002/product/${id}`);
  }
}

