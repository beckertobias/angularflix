import { Component, OnInit, Input } from '@angular/core';
import { ApiclientService } from '../apiclient.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movielistitem',
  templateUrl: './movielistitem.component.html',
  styleUrls: ['./movielistitem.component.css']
})
export class MovielistitemComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiclientService,
    ) { }

  ngOnInit(): void {
    this.getMovieItem();
  }

  getMovieItem(): void {
    const id = +this.route.snapshot.paramMap.get('movieid');
    this.apiservice.getMovieItem(id)
      .subscribe(movie => this.movie = movie);
  }

}
