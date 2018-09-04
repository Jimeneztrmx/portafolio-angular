import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoInterface } from '../interfaces/producto.interface';
import { timeout } from '../../../node_modules/@types/q';
import { resolve } from 'path';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: productoInterface[] = [];
  productosFiltrado: productoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();

   }
  
  
   private cargarProductos(){

    // hacer que regrese algo asincrono // PROMESAS EMACSCRIPT 6

    return new Promise((resolve, reject)=>{
      this.http.get('https://angular-html-66322.firebaseio.com/productos_idx.json')
      .subscribe((resp: productoInterface[]) =>{
  
        console.log(resp);
        this.productos=resp;
          
        setTimeout(() => {
          this.cargando=false;
        }, 2000);

        // cuando la siguiente linea se ejecuta qiuere decir que se resolvió correctamente
        resolve();

    });

  
      
    })
  }

  getProducto(id: string){
    // Ojo con el backtict `  //ECMACSCRIP6 TEMPLATE LITERALES - INSERCIONES DE PEDAZOS DE STRINGS
    return this.http.get(`https://angular-html-66322.firebaseio.com/productos/${id}.json`);    
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0)
    {
      // cargar productos
      this.cargarProductos().then(()=>{

        //ejecutar despues de tener los productos
        //aplicar filtro

        this.filtrarProductos(termino);
      });
    }else{
      // aplicar filtro
      this.filtrarProductos(termino);

    }

   

  }

  private filtrarProductos(termino: string){
    console.log(this.productos);
    //purgar el arreglo

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase(); 
    
    this.productos.forEach(producto =>{

      const tituloLower = producto.titulo.toLocaleLowerCase();


      if(producto.categoria.indexOf(termino) >=0 || tituloLower.indexOf(termino) >=0 ){
        this.productosFiltrado.push(producto);
      }
    })
  }
}
/*
this.productosFiltrado = this.productos.filter(producto =>{
  return true;
})

console.log(this.productosFiltrado);*/
