import { Component, OnInit } from '@angular/core';
import { Pageable } from 'src/app/services';
import { Column, IMODEL, MODEL, id, name } from 'src/app/services/movies';
import { Services } from 'src/app/services/movies/service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  movie: IMODEL = {} as IMODEL;
  movies: IMODEL[] = [];
  pageable: Pageable = {} as Pageable;
  columns: Column = {
    Name: 'Name',
    Director: 'Director',
    Date: 'Date'
  };
  
  model: MODEL<IMODEL> = {
    id: id,
    name: name,
    loading: false,
    entity: this.movie,
    entities: this.movies,
    pageable: this.pageable,
    criteria: [],
    isSuccess: false,
    findSuccess: false,
    saveSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    error: undefined
  }

  constructor(private services: Services) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.services.findAll().subscribe((movies: IMODEL[]) => {
      this.movies = movies as [];
      this.model = {
        ...this.model,
        isSuccess: true,
        entities: this.movies,
      }
    });
  }
}
