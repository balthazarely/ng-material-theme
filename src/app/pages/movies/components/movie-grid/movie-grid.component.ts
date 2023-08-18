import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie, MovieResponse } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
})
export class MovieGridComponent {
  movies: Movie[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  private subscription: Subscription | undefined;

  constructor(
    private movieService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchMovies(this.currentPage);
  }

  fetchMovies(page: number): void {
    this.subscription = this.movieService
      .getNowPlayingQuery(page)
      .subscribe((response: MovieResponse) => {
        this.movies = response.results;
        console.log('subscribing');
      });
  }

  fetchNextPage(): void {
    this.currentPage++;
    this.fetchMovies(this.currentPage);
  }

  // ngOnInit() {
  //   this.activatedRoute.queryParams.subscribe((params: Params) => {
  //     const genreQueryParam = params['genre'];
  //     if (genreQueryParam) {
  //       this.fetchMovies(+genreQueryParam);
  //     } else {
  //       this.fetchNowPlaying(this.currentPage);
  //     }
  //   });
  // }

  // fetchNextPage(): void {
  //   this.fetchNowPlaying(this.currentPage + 1);
  // }

  // fetchMovies(id: number): void {
  //   this.movieService.getMovies(id).subscribe((response: MovieResponse) => {
  //     this.movies = response.results;
  //   });
  // }

  // fetchNowPlaying(startingPage: number): void {
  //   this.movieService
  //     .getNowPlayingQuery(startingPage)
  //     .subscribe((response: MovieResponse) => {
  //       this.movies = response.results;
  //       this.currentPage = response.page;
  //       this.totalPages = response.total_pages;
  //     });
  // }
}
