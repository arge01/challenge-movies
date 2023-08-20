import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { MoviesComponent } from './pages/movies/movies.component';
import { CrudComponent as MovieCrud } from './pages/movies/crud/crud.component';
import { ListComponent as MovieList } from './pages/movies/list/list.component';

import { DirectorsComponent } from './pages/directors/directors.component';
import { CrudComponent as DirectorsCrud } from './pages/directors/crud/crud.component';
import { ListComponent as DirectorList } from './pages/directors/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'movies/new',
        component: MovieCrud,
      },
      {
        path: 'movies/list',
        component: MovieList,
      },
      {
        path: 'directors',
        component: DirectorsComponent,
      },
      {
        path: 'directors/new',
        component: DirectorsCrud,
      },
      {
        path: 'directors/list',
        component: DirectorList,
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
