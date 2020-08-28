import { Component, OnInit, Input } from '@angular/core';
import { ApiclientService } from '../apiclient.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Movie[];
  @Input() query: String;
  rootpath: String = 'https://image.tmdb.org/t/p/w300/';

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiclientService
    ) { }

  ngOnInit(): void {

  }

  onKey(event) {
    this.searchMovies(event.target.value);
    console.log(event.target.value)
  }

  searchMovies(title: String) {
    this.apiservice.searchMovies(title).pipe(
      debounceTime(300)
    ).subscribe(resp => this.movies = resp)
  }



}
