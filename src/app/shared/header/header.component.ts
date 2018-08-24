import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // INYECTAR EL SERVICIO PARA PODERLO UTILIZAR ( INFO )
  constructor( public _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}
