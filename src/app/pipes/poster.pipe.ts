import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: any): any {

    const url = 'http://image.tmdb.org/t/p/w500/';

    if (!poster.backdrop_path || poster.backdrop_path == null || poster.backdrop_path == '') {
  if (!poster.poster_path || poster.poster_path == null || poster.poster_path == '') {
    return './assets/images/imagen_no_disp.jpg';
  } else {

    return url + poster.poster_path;
  }

  } else {
    return url + poster.backdrop_path;
  }

  }

}
