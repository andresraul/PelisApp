import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  titulo: any;
  id: any;
  component: any;
  loading = true;
  

  constructor(public _ps: PeliculasService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
                this.activatedRoute.params.subscribe(resp => {
                  this.id = resp.id;
                  this.component = resp.component;
                });
    
   }

  ngOnInit() {

    this._ps.getTitulo( this.id ).subscribe(resp => {
      console.log(resp);
      this.titulo = resp;
      this.loading = false;

    });
  }
  regresar() {

  this.route.navigateByUrl(this.component);

  }


}
