import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films?: Film[];
  currentFilm: Film = {};
  currentIndex = -1;
  title = '';

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.retrieveFilms();
  }

  retrieveFilms(): void {
    this.filmService.getAll()
      .subscribe({
        next: (data) => {
          this.films = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveFilms();
    this.currentFilm = {};
    this.currentIndex = -1;
  }

  setActiveFilm(film: Film, index: number): void {
    this.currentFilm = film;
    this.currentIndex = index;
  }

  removeAllFilms(): void {
    this.filmService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentFilm = {};
    this.currentIndex = -1;

    this.filmService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.films = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
