import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmsListComponent } from './components/films-list/films-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFilmComponent,
    FilmDetailsComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
