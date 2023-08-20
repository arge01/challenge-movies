import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Criteria, Page } from '..';
import { IMODEL } from '.';

@Injectable({
  providedIn: "root"
})
export class Services {
  private uri: string = 'https://64e134ba50713530432d06b3.mockapi.io/api';
  private path: string = 'movies';

  constructor(private http: HttpClient) {}

  findAll(page?: Page, criteria?: Criteria): Observable<IMODEL[]> {
    if (page && criteria) {
      return this.http.get<IMODEL[]>(
        `${this.uri}/${this.path}?page=${page?.size}&limit=${page.size}&criteria=${criteria}`,
      );
    } else if (criteria) {
      return this.http.get<IMODEL[]>(`${this.uri}/${this.path}?criteria=${criteria}`);
    } else if (page) {
      return this.http.get<IMODEL[]>(`${this.uri}/${this.path}?page=${page?.size}&limit=${page.size}`);
    } else {
      return this.http.get<IMODEL[]>(`${this.uri}/${this.path}`);
    }
  }
}
