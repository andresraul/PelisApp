import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  peliculas: any;

  carteleras: any;

  ruta = 'home';

  loading = true;

  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe(resp => {
      
      this.peliculas = resp;
      this.loading = false;
    });

    this._ps.getEnCartelera().subscribe(resp => {
      
      this.carteleras = resp;
    });
   }

  ngOnInit() {

  }

}
