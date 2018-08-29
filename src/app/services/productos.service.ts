import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoInterface } from '../interfaces/producto.interface';
import { timeout } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: productoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }
  private cargarProductos(){

    this.http.get('https://angular-html-66322.firebaseio.com/productos_idx.json')
    .subscribe((resp: productoInterface[]) =>{

      console.log(resp);
      this.productos=resp;
      

      setTimeout(() => {
        this.cargando=false;
      }, 2000);
      
    })
  }
}
