import { Component, OnInit } from '@angular/core';
import { TmdbServiceService } from './tmdb-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'The Movie Database App';
  imgUrl : string = "https://image.tmdb.org/t/p/w200/";
  private moviesLisrArr : Array<any>;
  constructor( private tmdbService : TmdbServiceService )
  {
    this.getPopularMoviesList();
    this.moviesLisrArr = new Array();
  }

  getPopularMoviesList()
  {
      this.tmdbService.getPropulaMoviesdata().subscribe(
        successResp => {
          this.moviesLisrArr = successResp.results;
          console.log(this.moviesLisrArr);
          debugger;
        },
        errorResp => {

        }
      );
  }
}
