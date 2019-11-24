import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = 'xxxxxxxxxx';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  texto: string;

  constructor(private http: HttpClient) {}


getEnCartelera() {
  return this.http.get(`${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&language=es&page=1`)
  .pipe(map( (resp: any) => {
    return resp.results;
  }));
}



getPopulares() {

  const ahora = new Date();
  const fechaActual = ahora.getFullYear() + '-' + (ahora.getMonth() + 1) + '-' + ahora.getDate();
  const mes = ahora.setDate(-45);
  const mes1 = new Date(mes);
  const mesPasado = mes1.getFullYear() + '-' + (mes1.getMonth() + 2) + '-' + mes1.getDate();





  return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&language=es&sort_by=popularity.desc&include_adult=true&page=1&release_date.gte=${mesPasado}&release_date.lte=${fechaActual}`)
    .pipe(map( (resp: any) => {
    return resp.results;
  }));

}

buscarPelicula(texto: string) {

  this.texto = texto;

  return this.http.get(`${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`)
.pipe(map( (resp: any) => {
  return resp.results;
  
}));

}

getTitulo(id: any) {

  return this.http.get(`${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`);
}

guardarBusqueda() {

  if (this.texto.length < 1) {
    return;
  } else {
    localStorage.setItem('texto', this.texto);
  }

}


}
