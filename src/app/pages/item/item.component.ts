import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // Definidio sin inicializar
  producto: productoDescripcion;
  id: string;

  // Para poder leer el URL necesitamos el servicio  y lo inyectamos
  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

      // Subscribe estará pendiente de todos los cambios ue sucedan en el URL
      this.route.params
      .subscribe( parametros => {

        console.log(parametros['id']);
        this.productoService.getProducto(parametros['id'])
        .subscribe((producto: productoDescripcion) =>{
        console.log(producto);
        this.producto = producto;
        this.id=parametros['id'];
        })
        

      });

  }

}
