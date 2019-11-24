import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buscar', component: SearchComponent},
  {path: 'buscar/:texto', component: SearchComponent},
  {path: 'pelicula/:id/:component/:nombre', component: PeliculaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  imports: [
   RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
