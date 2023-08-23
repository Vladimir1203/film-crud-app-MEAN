import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

const baseUrl = 'http://localhost:3000/api/films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(baseUrl);
  }

  get(id: any): Observable<Film> {
    return this.http.get<Film>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log('Request Data:', data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Film[]> {
    return this.http.get<Film[]>(`${baseUrl}?title=${title}`);
  }
}
