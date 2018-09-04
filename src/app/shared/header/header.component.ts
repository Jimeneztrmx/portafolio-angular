import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // INYECTAR EL SERVICIO PARA PODERLO UTILIZAR ( INFO )
  constructor( public _servicio: InfoPaginaService,
               private router: Router) { }

  ngOnInit() {
  }

  // recibir parámetro del header para busqueda
  buscarProducto(termino: string){
    
    if( termino.length < 1){
      return;
    }

    this.router.navigate(['/search',termino])
  }

}
