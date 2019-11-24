import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// servicios
import { PeliculasService } from './providers/peliculas.service';

// componentes
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { TarjetaComponent } from './components/common/tarjeta/tarjeta.component';

// pipes
import { PosterPipe } from './pipes/poster.pipe';
import { FormsModule } from '@angular/forms';
import { BackdropPipe } from './pipes/cartel.pipe';
import { LoadingComponent } from './components/common/loading/loading.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    PeliculaComponent,
    PosterPipe,
    TarjetaComponent,
    BackdropPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
