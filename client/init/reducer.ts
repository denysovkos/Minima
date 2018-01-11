import { resolve } from 'url';
import { handleActions, Action } from 'redux-actions';

import { InitState } from './model';

import {
    INIT_SUCCESS,
    INIT_FAIL
  } from './constants/ActionTypes';

  export default handleActions<InitState, any>({
    [INIT_SUCCESS]: (state: InitState, action: Action<InitState>): InitState => {
      console.log('action in init reducer', action)
      return action.payload;
    },
  
    [INIT_FAIL]: (state: InitState, action: Action<InitState>): InitState => {
      return {
        time: new Date().toDateString(),
        completed: true,
        errors: true,
      }
    }
  }, {});