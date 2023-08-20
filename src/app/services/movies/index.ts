import { Criteria, Pageable } from '..';

export const id: string = "movies";
export const name: string = "Movies";

export interface IMODEL {
  id: number;
  name: string;
  directors: number;
  createdAt: Date;
}

export interface Column {
  Name: string;
  Director: string;
  Date: string;
}

export interface MODEL<IMODEL> {
  id: string;
  name: string;
  loading: boolean;
  entity: IMODEL;
  entities: IMODEL[];
  pageable: Pageable;
  criteria: Criteria[];
  isSuccess: boolean;
  findSuccess: boolean;
  saveSuccess: boolean;
  deleteSuccess: boolean;
  updateSuccess: boolean;
  error: string | undefined;
}
