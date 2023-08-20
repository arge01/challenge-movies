import { QueryOperator } from '../constant/QueryOperator';

export interface Pageable {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  sort?: string;
  direction?: 'ASC' | 'DESC';
  change?: boolean;
}

export interface Page {
  page: number;
  size: number;
}

export interface Criteria {
  key: string;
  operator:
    | QueryOperator.equals
    | QueryOperator.greaterthan
    | QueryOperator.in
    | QueryOperator.lessthan
    | QueryOperator.like
    | QueryOperator.noteq;
  value?: string | number | any;
  values?: Array<string>;
}
