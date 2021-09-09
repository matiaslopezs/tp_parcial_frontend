import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listadatos } from '../model/datos';
import { Subcategoria } from '../model/subcategoria';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesubcategoriaService {
  private api: string = "http://181.123.243.5:8080/stock-pwfe/tipoProducto";

  constructor( private http: HttpClient ) { }

  getSubcategorias(): Observable<listadatos<Subcategoria>> {
    return this.http.get<listadatos<Subcategoria>>(this.api); 
  }

  agregarSubcategorias(sc:Subcategoria): Observable<Subcategoria> {
    return this.http
    .post<Subcategoria>(this.api, sc)
    .pipe(
      tap(
        data => console.log('subcategoria agregada'+data),
        error => console.log('error en sc '+error)
      )
    );
  }

  
}
