import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Tarea} from '../interfaces/tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  BASE_URL: string = 'http://localhost:3002';

  constructor(private http: HttpClient) { }
  getTareas(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>('http://localhost:3002/tarea');
  }
  createTarea(tarea: Tarea): Observable<Tarea>{
    return this.http.post<Tarea>('http://localhost:3002/tarea/create',tarea);
  }
  deleteTarea(id: string): Observable<Tarea>{
      return this.http.delete<Tarea>(`http://localhost:3002/tarea/delete?tareaID=${id}`);
  }
  updateTarea(id: any, tarea: Tarea): Observable<Tarea>{
    return this.http.put<Tarea>(`http://localhost:3002/tarea/update?tareaID=${id}`, tarea);
  }
  getTarea(id: string): Observable<Tarea>{
    return this.http.get<Tarea>(`http://localhost:3002/tarea/${id}`);
  }
}
