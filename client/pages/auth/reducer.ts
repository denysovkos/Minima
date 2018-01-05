import { handleActions, Action } from 'redux-actions';

import { AuthState, AuthObj } from './model';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
  } from './constants/ActionTypes';

  const initialState: AuthState = {
    isAuth: false,
    error: ''
  }; 

  export default handleActions<AuthState | AuthObj>({
    [LOGIN_SUCCESS]: (state: AuthState, action: any): AuthState => {
      return {isAuth: true, userName: action.userName};
    },
  
    [LOGIN_FAIL]: (state: AuthState, action: Action<AuthState>): AuthState => {
      return {isAuth: false, error: 'Wrong username or password'}
    },
    
    [LOGOUT]: (state: AuthState, action: Action<AuthState>): AuthState => {
      return {isAuth: false};
    },
  }, initialState);