import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
//import { EffectsModule } from '@ngrx/effects';

import { entityReducer } from './services/movies/movies.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: entityReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
