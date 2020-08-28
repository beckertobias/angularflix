import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiclientService {

  constructor(private httpClient: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.httpClient
    .get('http://movied.herokuapp.com/categories');
  }

  getDiscoverMovies(): Observable<any> {
    return this.httpClient
    .get('http://movied.herokuapp.com/discover');
  }

  getGenreMovies(id: Number): Observable<any> {
    return this.httpClient
    .get(`http://movied.herokuapp.com/categories/${id}`);
  }

  getMovieItem(id: Number): Observable<any> {
    return this.httpClient
    .get(`http://movied.herokuapp.com/movie/${id}`)
  }

  searchMovies(title: String): Observable<any> {
    return this.httpClient
    .get('http://movied.herokuapp.com/search?q=' + title);
  }
}
