import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Movie,
  MovieGenresResponse,
  MovieResponse,
} from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private key = '5e9bd2fa585826bdfc4233fb6424f425';
  private genresQuery = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}&language=en-US&page=1`;
  private moviesQuery = `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`;

  constructor(private http: HttpClient) {}

  getMovieGenres(): Observable<MovieGenresResponse> {
    return this.http.get<MovieGenresResponse>(this.genresQuery);
  }

  getMovies(genreId: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.moviesQuery + genreId);
  }

  getNowPlayingQuery(page: number = 1): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.key}&language=en-US&page=${page}`
    );
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.key}&language=en-US`
    );
  }
}
