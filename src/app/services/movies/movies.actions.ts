import { IMODEL, MODEL, name } from '.';
import { createAction, props } from '@ngrx/store';

export const load = createAction(`[${name}] Load`);
export const findAll = createAction(
  `[${name}] All`,
  props<{
    entities: MODEL<IMODEL>['entities'];
    pageable: MODEL<IMODEL>['pageable'];
    criteria: MODEL<IMODEL>['criteria'];
  }>(),
);
export const add = createAction(`[${name}] Add`, props<{ entity: IMODEL }>());
export const del = createAction(`[${name}] Delete`, props<{ id: number }>());
export const update = createAction(`[${name}] Update`, props<{ id: number }>());
export const selectById = createAction('[Book] Select', props<{ id: number }>());
