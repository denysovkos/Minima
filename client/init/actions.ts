import { isEmpty } from 'lodash';
import { createAction } from 'redux-actions';

import { InitState } from './model';
import { Dispatch } from 'redux';

import {
    INIT_SUCCESS,
    INIT_FAIL
} from './constants/ActionTypes';
import { VerifyProfile } from '../pages/auth/index';



const initialState: InitState = {
    time: new Date().toDateString(),
    completed: true,
    errors: false,
  }; 

function Init() {
  return (dispatch) => {
    fetch(`http://${window.location.hostname}:3500/v1/api/status`)
      .then(data => data.json())
      .then(data => dispatch({type: INIT_SUCCESS, payload: Object.assign(initialState, data)}))
      .then(() => dispatch(VerifyProfile()))
      .catch(err => dispatch({type: INIT_FAIL, payload: err}));
  }
}

export {
    Init
}