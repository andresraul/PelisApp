import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  peliculas: any;

  ruta = 'buscar';

  entrada: string;

  loading = false;

  constructor(public _ps: PeliculasService,
              private activatedRoute: ActivatedRoute) {
                this.activatedRoute.params.subscribe(params => {

                  this.entrada = params.texto;
                  this.buscar();

                });

                if (localStorage.getItem('texto')) {
       this.entrada = localStorage.getItem('texto');
       this.buscar();
       localStorage.removeItem('texto');
    }

   }

  ngOnInit() {
  }

buscar() {


  if (this.entrada === null || this.entrada === '') {
    return;
  }

  this.loading = true;



  this._ps.buscarPelicula( this.entrada )
  .subscribe(resp => {
    this.peliculas = resp;
    this.loading = false;
  });
}

}
