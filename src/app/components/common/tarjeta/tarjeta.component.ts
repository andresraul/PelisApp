import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../../providers/peliculas.service';




@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent implements OnInit {

  @Input() pelicula: any;
  @Input() component: any;

  constructor(private route: Router,
              private _ps: PeliculasService) { }

  ngOnInit() {
  }


  irPelicula( id ) {
    if(this.component === 'buscar') {

      this._ps.guardarBusqueda();
    }

    this.route.navigate(['pelicula', this.pelicula.id, this.component , this.pelicula.title]);
  
  }

}
