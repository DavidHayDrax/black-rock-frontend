import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Compra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  BASE_URL: string = 'http://localhost:3003';

  constructor(private http: HttpClient) { }
  getCompras(): Observable<Compra[]>{
    return this.http.get<Compra[]>('http://localhost:3003/compra');
  }
  createCompra(compra: Compra): Observable<Compra>{
    return this.http.post<Compra>('http://localhost:3003/compra/create',compra);
  }
  deleteCompra(id: string): Observable<Compra>{
      return this.http.delete<Compra>(`http://localhost:3003/compra/delete?compraID=${id}`);
  }
  updateCompra(id: any, compra: Compra): Observable<Compra>{
    return this.http.put<Compra>(`http://localhost:3003/compra/update?compraID=${id}`, compra);
  }
  getCompra(id: string): Observable<Compra>{
    return this.http.get<Compra>(`http://localhost:3003/compra/${id}`);
  }
}
