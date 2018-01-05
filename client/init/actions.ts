import { createAction } from 'redux-actions';

import { InitState } from './model';

import {
    INIT_SUCCESS,
    INIT_FAIL
} from './constants/ActionTypes';

const initialState: InitState = {
    time: new Date().toDateString(),
    completed: true,
    errors: false,
  }; 

const Init = createAction<InitState, InitState>(
  INIT_SUCCESS,
  (init: InitState) => init
);

const FailInit = createAction<InitState, InitState>(
  INIT_FAIL,
  (init: InitState) => Object.assign(initialState, {errors: true})
);

export {
    Init,
    FailInit,
}
