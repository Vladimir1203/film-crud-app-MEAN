import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentFilm: Film = {
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getFilm(this.route.snapshot.params["id"]);
    }
  }

  getFilm(id: string): void {
    this.filmService.get(id)
      .subscribe({
        next: (data) => {
          this.currentFilm = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentFilm.title,
      description: this.currentFilm.description,
      published: status
    };

    this.message = '';

    this.filmService.update(this.currentFilm.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentFilm.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateFilm(): void {
    this.message = '';

    this.filmService.update(this.currentFilm.id, this.currentFilm)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This film was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteFilm(): void {
    this.filmService.delete(this.currentFilm.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/films']);
        },
        error: (e) => console.error(e)
      });
  }

}
