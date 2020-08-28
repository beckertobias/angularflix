import { Component, OnInit, Input } from '@angular/core';
import { ApiclientService } from '../apiclient.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})

export class MovielistComponent implements OnInit {

  constructor(private apiservice: ApiclientService) { }

  @Input() category_id: Number;
  @Input() category_name: String;
  rootpath: String;
  movies: Movie[];

  ngOnInit(): void {
    this.rootpath = 'https://image.tmdb.org/t/p/w300/';
    if (this.category_name === 'Discover') {
      console.log(this.category_id, this.category_name)
      this.getDiscoverView();
    } else {
      console.log(this.category_id, this.category_name)
      this.getGenreView();
    }
  }

  getDiscoverView() {
    console.log(this.category_id, this.category_name)
    this.apiservice.getDiscoverMovies()
    .subscribe(resp => {
      this.movies = resp;
    })
  }

  getGenreView(): void {
    console.log(this.category_id, this.category_name)
    this.apiservice.getGenreMovies(this.category_id)
    .subscribe(resp => {
      this.movies = resp;
    })
  }
}
