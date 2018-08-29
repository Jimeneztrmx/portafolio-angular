import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];
  constructor(private http: HttpClient) { 

   this.cargarInfo();
  this.cargarEquipo();

  }

  private cargarInfo(){
    //prueba 
    console.log('INFO DE PAGINA LISTO');

    // Leer el archivo json
    // necesito un modulo para hacer peticiones http
    this.http.get('assets/data/data-pagina.json')  // donde esta la info
    .subscribe((resp: InfoPagina) => {   // subscribe recibe una respuesta 
        this.cargada=true;
        this.info= resp;
      console.log(resp);   // PRUEBA PARA CONSOLA
      console.log( resp['twitter']);
    });  
  }

  private cargarEquipo()
  {
    // cargar euipo desde firebase

    this.http.get('https://angular-html-66322.firebaseio.com/equipo.json')  // donde esta la info
    .subscribe((resp: any[]) => {   // subscribe recibe una respuesta 
      this.equipo = resp;
      console.log(resp);
       });
      }
}
