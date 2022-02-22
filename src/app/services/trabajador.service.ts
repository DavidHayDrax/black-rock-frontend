import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajador } from '../interfaces/trabajador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  BASE_URL: string = 'http://localhost:3003';

  constructor(private http: HttpClient) { }
  getTrabajadores(): Observable<Trabajador[]>{
    return this.http.get<Trabajador[]>('http://localhost:3003/trabajador');
  }
  createTrabajador(trabajador: Trabajador): Observable<Trabajador>{
    return this.http.post<Trabajador>('http://localhost:3003/trabajador/create',trabajador);
  }
  deleteTrabajador(id: string): Observable<Trabajador>{
      return this.http.delete<Trabajador>(`http://localhost:3003/trabajador/delete?trabajadorID=${id}`);
  }
  updateTrabajador(id: any, trabajador: Trabajador): Observable<Trabajador>{
    return this.http.put<Trabajador>(`http://localhost:3003/trabajador/update?trabajadorID=${id}`, trabajador);
  }
  getTrabajador(id: string): Observable<Trabajador>{
    return this.http.get<Trabajador>(`http://localhost:3003/trabajador/${id}`);
  }
}
