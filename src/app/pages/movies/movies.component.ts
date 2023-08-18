import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Movie,
  MovieGenresResponse,
  MovieResponse,
} from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  // movies: Movie[] = [];
  // genreCollection: MovieGenresResponse | undefined;
  // selectedGenre: number = 0;

  constructor(private router: Router, private movieService: MoviesService) {}

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   const genreQueryParam = params['genre'];
    //   if (genreQueryParam) {
    //     this.selectedGenre = +genreQueryParam;
    //     this.getMoviesInGenre(this.selectedGenre);
    //   }
    // });
    // this.movieService
    //   .getMovieGenres()
    //   .subscribe((response: MovieGenresResponse) => {
    //     this.genreCollection = response;
    //   });
  }

  // getMoviesInGenre(id: number): void {
  //   this.selectedGenre = id;
  //   const queryParams: Params = { genre: id };
  //   this.router.navigate([], {
  //     relativeTo: this.activatedRoute,
  //     queryParams,
  //     queryParamsHandling: 'merge',
  //   });

  // this.movieService.getMovies(id).subscribe((response: MovieResponse) => {
  //   this.movies = response.results;
  // });
  // }
}
