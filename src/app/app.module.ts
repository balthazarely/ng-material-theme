import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputComponent } from './components/input/input.component';
import { ChipsComponent } from './components/chips/chips.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './pages/movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieFilterComponent } from './pages/movies/components/movie-filter/movie-filter.component';
import { MovieGridComponent } from './pages/movies/components/movie-grid/movie-grid.component';
import { MovieGenreFilterComponent } from './pages/movies/components/movie-genre-filter/movie-genre-filter.component';
import { MovieCardComponent } from './pages/movies/components/movie-card/movie-card.component';
import { ComponentsComponent } from './pages/components/components.component';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ComponentsComponent,
    MovieGenreFilterComponent,
    MovieGridComponent,
    ThemeComponent,
    MovieFilterComponent,
    MovieCardComponent,
    ButtonComponent,
    TypographyComponent,
    CalendarComponent,
    DropdownComponent,
    InputComponent,
    ChipsComponent,
    SlideToggleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
