import { Component, OnInit } from '@angular/core';
import { TmdbServiceService } from './tmdb-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'The Movie Database App';
  constructor( private tmdbService : TmdbServiceService )
  {
    this.getPopularMoviesList();
  }

  getPopularMoviesList()
  {
      this.tmdbService.getPropulaMoviesdata().subscribe(
        successResp => {
          debugger;
        },
        errorResp => {

        }
      );
  }
}
