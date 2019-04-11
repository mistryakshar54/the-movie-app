import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TmdbServiceService {

  constructor( private httpClient : HttpClient ) { }

  public getPropulaMoviesdata() : Observable<any>
  {
     return this.httpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=7cb51a04fc542c861d59fd26a096d199&language=en-US&page=1");
    // .subscribe(
    //   successResp => {
    //     debugger
    //     // return new Observable();
    //   },
    //   errorResp => {

    //   }
    // );
  }
}
