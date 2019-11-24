import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backdrop'
})
export class BackdropPipe implements PipeTransform {

  transform(backdrop: any): any {
    const url = 'http://image.tmdb.org/t/p/w500/';

    if (!backdrop.poster_path || backdrop.poster_path == null || backdrop.poster_path == '') {
  if (!backdrop.backdrop_path || backdrop.backdrop_path == null || backdrop.backdrop_path == '') {
    return './assets/images/imagen_no_disp.jpg';
  } else {

    return url + backdrop.backdrop_path;
  }

  } else {
    return url + backdrop.poster_path;
  }
  }

}
