import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MovieGenre, MovieGenresResponse } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-genre-filter',
  templateUrl: './movie-genre-filter.component.html',
  styleUrls: ['./movie-genre-filter.component.scss'],
})
export class MovieGenreFilterComponent {
  genres: MovieGenre[] = [];
  selectedGenre: number | undefined = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.movieService
      .getMovieGenres()
      .pipe(
        switchMap((response: MovieGenresResponse) => {
          this.genres = response.genres;
          return this.activatedRoute.queryParams;
        })
      )
      .subscribe((params: Params) => {
        this.selectedGenre = params['genre'] ? +params['genre'] : undefined;
      });
  }

  selectGenre(id: number | undefined): void {
    const queryParams: Params = id ? { genre: id } : { genre: undefined };
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
