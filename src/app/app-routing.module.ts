import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistitemComponent } from './movielistitem/movielistitem.component';
import { MovielistComponent } from './movielist/movielist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: ':movieid', component: MovielistitemComponent},
  { path: 'search/:query', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }