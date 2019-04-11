import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { TmdbServiceService } from './tmdb-service.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TmdbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
