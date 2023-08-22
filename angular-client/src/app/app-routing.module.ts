import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { AddFilmComponent } from './components/add-film/add-film.component';

const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: FilmsListComponent },
  { path: 'films/:id', component: FilmDetailsComponent },
  { path: 'add', component: AddFilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
