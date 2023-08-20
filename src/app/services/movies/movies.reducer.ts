import { createReducer, on } from '@ngrx/store';
import * as Actions from './movies.actions';
import { IMODEL, MODEL } from '.';

export const initialState: MODEL<IMODEL> = {} as MODEL<IMODEL>;

export const entityReducer = createReducer(
  initialState,
  on(Actions.load, state => state),
  on(Actions.findAll, (state, { entities, pageable, criteria }) => {
    return {
      ...state,
      entities,
      pageable,
      criteria
    }
  }),
  on(Actions.add, (state, { entity }) => {
    return {
      ...state, 
      entity,
    }
  }),
);