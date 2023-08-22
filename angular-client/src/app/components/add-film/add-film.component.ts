import { Component } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent {

  film: Film = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private filmService: FilmService) { }

  saveFilm(): void {
    const data = {
      title: this.film.title,
      description: this.film.description
    };

    this.filmService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newFilm(): void {
    this.submitted = false;
    this.film = {
      title: '',
      description: '',
      published: false
    };
  }

}
