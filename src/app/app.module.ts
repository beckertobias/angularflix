import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MovielistitemComponent } from './movielistitem/movielistitem.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    TopbarComponent,
    MovielistitemComponent,
    HomeComponent,
    SearchComponent,
    ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
